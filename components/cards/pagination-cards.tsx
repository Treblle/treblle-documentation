"use client";
import { usePathname } from "next/navigation";
import { getPageMap } from "nextra/page-map";
import { Link } from "nextra-theme-docs";
import { useEffect, useState } from "react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type Page = {
    name: string;
    route: string;
    title: string;
    children?: Array<Page>;
};

export default function PaginationCards() {
    const pathname = usePathname();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pages, setPages] = useState<Array<any>>([]);
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");
    const [previousTitle, setPreviousTitle] = useState("");
    const [nextTitle, setNextTitle] = useState("");

    useEffect(() => {
        async function fetchPages() {
            const allPages = await getPageMap();
            setPages(allPages);
        }
        void fetchPages();
    }, []);

    const flattenArray = (array: Array<Page>): Array<Page> => {
        return array.flatMap((item) => {
            const { name, route, title, children } = item;
            const current: Page = { name, route, title };
            return children ? flattenArray(children) : [current];
        });
    };

    function normalizePages() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const filtered = pages.filter((p) => !("data" in p) && p.name !== "--");

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return flattenArray(filtered);
    }

    useEffect(() => {
        if (pages.length === 0) return;
        const normalizedPages = normalizePages();
        const found = normalizedPages.find((p) => p.route === pathname);
        if (found) {
            const currentIndex = normalizedPages.indexOf(found);
            const previousIndex = currentIndex > 0 ? currentIndex - 1 : -1;
            const nextIndex =
                currentIndex < normalizedPages.length - 1
                    ? currentIndex + 1
                    : normalizedPages.length + 1;
            setPrevious(normalizedPages[previousIndex]?.route ?? "");
            setNext(normalizedPages[nextIndex]?.route ?? "");
            setPreviousTitle(normalizedPages[previousIndex]?.title ?? "");
            setNextTitle(normalizedPages[nextIndex]?.title ?? "");
        }
    }, [pages, pathname]);

    return (
        <Box
            css={{
                marginTop: "64px",
                borderTopWidth: "0.1px",
                borderTopStyle: "solid",
                borderTopColor: "#29304b",
                display: "flex",
                justifyContent: previous ? "space-between" : "flex-end",
                alignItems: "center",
                padding: "12px 0",
            }}
        >
            {previous && (
                <Link
                    href={previous}
                    className={css({
                        marginTop: "22.5px",
                        position: "relative",
                        color: "lightElement.300 !important",
                        textDecoration: "none !important",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "18px",
                        "&::before": {
                            position: "absolute",
                            color: "lightElement.200",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: 1.17,
                            letterSpacing: "normal",
                            content: '"Previous"',
                            top: "-7px",
                            left: "53px",
                        },
                         "&:hover": {
                            color: "#ffffffff !important",
                            cursor: "pointer",
                        },
                    })}
                >
                    <Icon icon="ArrowRight" style={{ rotate: "180deg" }} />
                    {previousTitle}
                </Link>
            )}
            {next && (
                <Link
                    href={next}
                    className={css({
                        marginTop: "22.5px",
                        position: "relative",
                        color: "lightElement.300 !important",
                        textDecoration: "none !important",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "18px",
                        "&:hover": {
                            color: "#ffffffff !important",
                            cursor: "pointer",
                        },
                        "&::before": {
                            position: "absolute",
                            color: "lightElement.200",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: 1.17,
                            letterSpacing: "normal",
                            content: '"Next"',
                            top: "-7px",
                            right: "53px",
                        },
                    })}
                >
                    {nextTitle}
                    <Icon icon="ArrowRight" />
                </Link>
            )}
        </Box>
    );
}
