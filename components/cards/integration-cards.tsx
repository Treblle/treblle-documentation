import { BookOpen } from 'lucide-react';
import Link from "next/link";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type IntegrationCardsProperties = {
    readonly children: React.ReactNode;
    readonly icon?: React.ReactNode;
    readonly title?: string;
    readonly link?: string;
    readonly linkTitle?: string;
};

export function IntegrationCards({children}: IntegrationCardsProperties) {
    return <Box className={css({
        display: "flex",
        gap: "16px",
        flexDirection: "row",
        flexWrap: "wrap",
        marginY: "48px",
        flex: "1 1 400px",
    })}>
        {children}
    </Box>
}

IntegrationCards.Card = function IntegrationCardsCard({children, icon, title, link, linkTitle}: IntegrationCardsProperties) {
    return <Box className={css({
        display: "flex",
        flexDirection: "column",
        width: {base:"100%",md:"300px", xl:"350px"},
        border: "1px solid #29304b",
        borderRadius: "8px",
        padding: "24px",
    })}>
        <Box className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "18px",
            gap: "8px",
        })}>
            {icon}
            <h3 className={css({
                fontSize: "20px",
            })}>{title}</h3>
        </Box>
        <Box className={css({
            fontSize: "14px",
            color:"darkElement.500",
        })}>{children}</Box>

        {link && linkTitle && <Link href={link} className={css({
            color: "electric.200",
            fontSize: "14px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            paddingX: "0 !important",
        })}>
            <BookOpen className={css({width: "16px", height: "16px"})} />
            {linkTitle}
        </Link>}
    </Box>
}