import { NextRequest, NextResponse } from "next/server";
import TurndownService from "turndown";
import * as cheerio from "cheerio";

export const dynamic = "force-dynamic";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ page?: string[] }> }
) {
    try {
        const { page } = await params;
        const originalPath = page ? `/${page.join("/")}` : "/";
        const baseUrl = request.nextUrl.origin;
        const targetUrl = `${baseUrl}${originalPath}`;

        const response = await fetch(targetUrl, {
            headers: {
                Accept: "text/html,application/xhtml+xml",
                "User-Agent": "Mozilla/5.0 (compatible; TreblleBot/1.0)",
            },
            cache: "no-store",
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
        return new NextResponse(
            `Error converting to markdown: ${error instanceof Error ? error.message : "Unknown error"}`,
            { status: 500 }
        );
    }
}
