"use client";
// import { usePathname } from "next/navigation";
import { usePathname } from "next/navigation";
import { Link } from "nextra-theme-docs";
import { useEffect, useState } from "react";

import { Box } from "~styled-system/jsx";

import getPages from "../helpers/get-pages";
import { Icon } from "../theme/icons";

const allPages: Array<{ name: unknown; path: unknown; }> = [];

export default function CustomPagination() {
    // const page = usePathname();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pages, setPages] = useState<Array<any>>([]);
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");

    useEffect(() => {
        async function fetchPages() {
            const allPages = await getPages();
            setPages(allPages);
        }
        void fetchPages();
    }, []);
    console.log(pages);

    for (const page of pages) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if(page.children) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            console.log(page.children);
        }else {

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            allPages.push({name: page.title, path:page.route});
        }
    }
    console.log(allPages);

    return (
        <Box
            css={{
                borderTopWidth: "0.1px",
                borderTopStyle: "solid",
                borderTopColor: "lightElement.200",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                "& .previous-link, & .next-link": {
                    marginTop: "22.5px",
                    position: "relative",
                    color: "lightElement.300",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "18px",
                },
                "& .pagination-link::before": {
                    position: "absolute",
                    color: "lightElement.200",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: 1.17,
                    letterSpacing: "normal",
                },
                "& .previous-link::before": {
                    content: '"Previous"',
                    top: "-7px",
                    left: "53px",
                },
                "& .next-link::before": {
                    content: '"Next"',
                    top: "-7px",
                    right: "53px",
                },
            }}
        >
            {previous && (
                <Link href={previous} className="pagination-link previous-link">
                    <Icon icon="ArrowRight" style={{ rotate: "180deg" }} />
                    Test
                </Link>
            )}
            {next && (
                <Link href={next} className="pagination-link next-link">
                    Test
                    <Icon icon="ArrowRight" />
                </Link>
            )}
        </Box>
    );
}
