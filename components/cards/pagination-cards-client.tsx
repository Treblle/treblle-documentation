"use client";
import { usePathname } from "next/navigation";
import { Link } from "nextra-theme-docs";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type Page = {
    name: string;
    route: string;
    title: string;
    children?: Array<Page>;
};

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pages: Array<any>;
};

const flattenArray = (array: Array<Page>): Array<Page> => {
    return array.flatMap((item) => {
        const { name, route, title, children } = item;
        const current: Page = { name, route, title };
        return children ? flattenArray(children) : [current];
    });
};

export default function PaginationCardsClient({ pages }: Props) {
    const pathname = usePathname();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const filtered = pages.filter((p) => p && !("data" in p) && p.name !== "--");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const normalizedPages = flattenArray(filtered).filter((p) => p.route && p.title);

    const currentIndex = normalizedPages.findIndex((p) => p.route === pathname);
    const previousPage = currentIndex > 0 ? normalizedPages[currentIndex - 1] : null;
    const nextPage =
        currentIndex >= 0 && currentIndex < normalizedPages.length - 1
            ? normalizedPages[currentIndex + 1]
            : null;

    return (
        <Box
            css={{
                marginTop: "64px",
                borderTopWidth: "0.1px",
                borderTopStyle: "solid",
                borderTopColor: "#29304b",
                display: "flex",
                justifyContent: previousPage ? "space-between" : "flex-end",
                alignItems: "center",
                padding: "12px 0",
            }}
        >
            {previousPage && (
                <Link
                    href={previousPage.route}
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
                    {previousPage.title}
                </Link>
            )}
            {nextPage && (
                <Link
                    href={nextPage.route}
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
                    {nextPage.title}
                    <Icon icon="ArrowRight" />
                </Link>
            )}
        </Box>
    );
}
