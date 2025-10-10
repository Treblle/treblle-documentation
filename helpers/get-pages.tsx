import { getPageMap } from "nextra/page-map";

export default async function getPages() {
    const pages = await getPageMap();
    return pages;
}