import { NextRequest, NextResponse } from "next/server";
import TurndownService from "turndown";
import * as cheerio from "cheerio";

export const dynamic = "force-dynamic";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ page?: string[] }> }
) {
    try {
        const { page } = await params;
        const originalPath = page ? `/${page.join("/")}` : "/";

        // Basic path validation to prevent traversal or malformed paths
        if (!originalPath.startsWith("/")) {
            return new NextResponse("Invalid path", { status: 400 });
        }
        if (originalPath.split("/").includes("..")) {
            return new NextResponse("Invalid path segment", { status: 400 });
        }

        const configuredBaseUrl = process.env["NEXT_PUBLIC_SITE_URL"];
        if (!configuredBaseUrl) {
            return new NextResponse("Server misconfiguration: missing base URL", { status: 500 });
        }

        let trustedBaseUrl: URL;
        try {
            trustedBaseUrl = new URL(configuredBaseUrl);
        } catch {
            return new NextResponse("Server misconfiguration: invalid base URL", { status: 500 });
        }

        if (trustedBaseUrl.protocol !== "http:" && trustedBaseUrl.protocol !== "https:") {
            return new NextResponse("Server misconfiguration: invalid base URL protocol", { status: 500 });
        }

        const targetUrl = new URL(originalPath, trustedBaseUrl).toString();

        const response = await fetch(targetUrl, {
            headers: {
                Accept: "text/html,application/xhtml+xml",
                "User-Agent": "Mozilla/5.0 (compatible; TreblleBot/1.0)",
            },
            cache: "no-store",
            signal: AbortSignal.timeout(8000),
        });

        if (!response.ok) {
            return new NextResponse(`Page not found: ${originalPath}`, {
                status: response.status,
            });
        }
        const html = await response.text();

        const $ = cheerio.load(html);

        const selectorsToRemove = [
            "nav",
            "header",
            "footer",
            ".nextra-nav-container",
            ".nx-nav-container",
            ".nextra-sidebar",
            ".nx-sidebar",
            ".nextra-toc",
            ".nx-toc",
            '[class*="Navbar"]',
            '[class*="footer"]',
            '[class*="Footer"]',
            '[class*="sidebar"]',
            '[class*="Sidebar"]',
            "aside",
            '[role="navigation"]',
            '[role="banner"]',
            '[role="contentinfo"]',
            "script",
            "style",
            "noscript",
        ];

        selectorsToRemove.forEach((selector) => {
            $(selector).remove();
        });

        let mainContent = $("main[data-pagefind-body]").html() || $("main").html() || "";
        if (!mainContent) {
            return new NextResponse("No content found", { status: 404 });
        }

        const turndownService = new TurndownService({
            headingStyle: "atx",
            hr: "---",
            bulletListMarker: "-",
            codeBlockStyle: "fenced",
            emDelimiter: "_",
            linkStyle: "inlined",
        });

        const markdown = turndownService.turndown(mainContent);

        const cleanedMarkdown = markdown.replace(/\n{3,}/g, "\n\n").trim();

        return new NextResponse(cleanedMarkdown, {
            status: 200,
            headers: {
                "Content-Type": "text/markdown; charset=utf-8",
                "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error("Markdown conversion error:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
