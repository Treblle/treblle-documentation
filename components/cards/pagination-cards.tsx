import { getPageMap } from "nextra/page-map";

import { type PaginationPage, PaginationCardsClient } from "./pagination-cards-client";

type PageMapNode = {
    readonly name?: string;
    readonly route?: string;
    readonly title?: unknown;
    readonly children?: ReadonlyArray<PageMapNode>;
};

function flatten(nodes: ReadonlyArray<PageMapNode>): Array<PaginationPage> {
    return nodes.flatMap((node) => {
        if (!node || "data" in node || node.name === "--") return [];
        if (node.children) return flatten(node.children);
        return node.route && typeof node.title === "string"
            ? [{ route: node.route, title: node.title }]
            : [];
    });
}

// Server component: reads Nextra's page map on the server so the MDX pages it
// imports never end up in the client bundle (required since Next 16.4).
export default async function PaginationCards() {
    const pageMap = (await getPageMap()) as ReadonlyArray<PageMapNode>;
    return <PaginationCardsClient pages={flatten(pageMap)} />;
}
