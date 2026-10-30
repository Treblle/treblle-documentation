"use client";
import { usePathname } from "next/navigation";
import { Link } from "nextra-theme-docs";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

export type PaginationPage = {
    route: string;
    title: string;
};

export default function PaginationCardsClient({
    pages,
}: {
    readonly pages: ReadonlyArray<PaginationPage>;
}) {
    const pathname = usePathname();

    const currentIndex = pages.findIndex((p) => p.route === pathname);
    const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : undefined;
    const nextPage = currentIndex === -1 ? undefined : pages[currentIndex + 1];
    const previous = previousPage?.route ?? "";
    const next = nextPage?.route ?? "";
    const previousTitle = previousPage?.title ?? "";
    const nextTitle = nextPage?.title ?? "";

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
                        padding: "10px 30px",
                        "&::before": {
                            position: "absolute",
                            color: "lightElement.400",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: 1.17,
                            letterSpacing: "normal",
                            content: '"Previous"',
                            top: "-7px",
                            left: "53px",
                            fontSize: "12px",
                            width: "max-content",
                            height: "16px",
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
                        padding: "10px 30px",
                        "&:hover": {
                            color: "#ffffffff !important",
                            cursor: "pointer",
                        },
                        "&::before": {
                            position: "absolute",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: 1.17,
                            letterSpacing: "normal",
                            content: '"Next"',
                            top: "-7px",
                            right: "53px",
                            fontSize: "12px",
                            width: "max-content",
                            height: "16px",
                            color: "lightElement.300",
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
