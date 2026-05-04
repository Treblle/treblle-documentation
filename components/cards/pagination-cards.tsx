import { getPageMap } from "nextra/page-map";

import PaginationCardsClient from "./pagination-cards-client";

export default async function PaginationCards() {
    const pages = await getPageMap();
    return <PaginationCardsClient pages={pages} />;
}
