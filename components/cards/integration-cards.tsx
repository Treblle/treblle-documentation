import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type IntegrationCardsProperties = {
    readonly children: React.ReactNode;
    readonly icon?: React.ReactNode;
    readonly title?: string;
};

export function IntegrationCards({children}: IntegrationCardsProperties) {
    return <Box className={css({
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
    })}>
        {children}
    </Box>
}

IntegrationCards.Card = function IntegrationCardsCard({children, icon, title}: IntegrationCardsProperties) {
    return <Box className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    })}>
        <Box className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
        })}>
            {icon}
            <h3>{title}</h3>
        </Box>
        {children}
    </Box>
}