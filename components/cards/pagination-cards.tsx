import { getPageMap } from "nextra/page-map";

import PaginationCardsClient, { type PaginationPage } from "./pagination-cards-client";

type Page = {
    name: string;
    route: string;
    title: string;
    children?: Array<Page>;
};

const flattenArray = (array: Array<Page>): Array<PaginationPage> => {
    return array.flatMap((item) => {
        const { route, title, children } = item;
        return children ? flattenArray(children) : [{ route, title }];
    });
};

// The page map is loaded on the server: importing it from a client component
// pulls every page.mdx into the client bundle, which Next.js rejects.
export default async function PaginationCards() {
    const pageMap = await getPageMap();
    const filtered = pageMap.filter(
        (p) => !("data" in p) && (p as { name?: string }).name !== "--"
    ) as Array<Page>;
    const pages = flattenArray(filtered).filter((p) => p.route && p.title);

    return <PaginationCardsClient pages={pages} />;
}
