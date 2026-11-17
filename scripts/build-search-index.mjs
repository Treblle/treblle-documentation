// Builds the Pagefind search index from the prerendered HTML of `next build`.
//
// Next.js writes prerendered pages to one of two layouts:
//   - .next/server/app/<route>.html                                  (no build adapter: local builds)
//   - .next/server/route-cache/APP_PAGE/<hash>/$/<route>.html        (with a build adapter: Vercel, Next >= 16.4)
// `pagefind --site .next/server/app` only understands the first one, so on Vercel it finds no
// HTML and fails. This script collects pages from both layouts and passes each one to Pagefind
// with its path relative to the site root, so search result URLs stay the same in both cases.

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import * as pagefind from "pagefind";

const SERVER_DIR = path.join(".next", "server");
const APP_DIR = path.join(SERVER_DIR, "app");
const ROUTE_CACHE_DIR = path.join(SERVER_DIR, "route-cache");
const OUTPUT_PATH = path.join("public", "_pagefind");

async function listHtmlFiles(dir) {
    let entries;
    try {
        entries = await readdir(dir, { recursive: true, withFileTypes: true });
    } catch (error) {
        if (error.code === "ENOENT") return [];
        throw error;
    }
    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
        .map((entry) => path.join(entry.parentPath, entry.name));
}

/** Returns a map of site-relative source path (e.g. "getting-started/quickstart.html") to file on disk. */
async function collectPages() {
    const pages = new Map();

    for (const file of await listHtmlFiles(APP_DIR)) {
        pages.set(path.relative(APP_DIR, file).split(path.sep).join("/"), file);
    }

    // route-cache/<kind>/<hash>/$/<route>.html: the route is everything after the "$" segment.
    for (const file of await listHtmlFiles(path.join(ROUTE_CACHE_DIR, "APP_PAGE"))) {
        const segments = path.relative(ROUTE_CACHE_DIR, file).split(path.sep);
        const routeStart = segments.indexOf("$");
        if (routeStart === -1) continue;
        pages.set(segments.slice(routeStart + 1).join("/"), file);
    }

    return pages;
}

const pages = await collectPages();
if (pages.size === 0) {
    console.error(
        `No prerendered HTML found in ${APP_DIR} or ${ROUTE_CACHE_DIR}. Did \`next build\` run?`
    );
    process.exit(1);
}

const { index, errors } = await pagefind.createIndex();
if (errors.length > 0) throw new Error(`Pagefind createIndex failed: ${errors.join(", ")}`);

for (const [sourcePath, file] of pages) {
    const result = await index.addHTMLFile({ sourcePath, content: await readFile(file, "utf8") });
    if (result.errors.length > 0) {
        throw new Error(`Pagefind failed on ${sourcePath}: ${result.errors.join(", ")}`);
    }
}

const written = await index.writeFiles({ outputPath: OUTPUT_PATH });
if (written.errors.length > 0)
    throw new Error(`Pagefind writeFiles failed: ${written.errors.join(", ")}`);

console.log(`Pagefind: read ${pages.size} HTML files, wrote index to ${OUTPUT_PATH}`);

await pagefind.close();
