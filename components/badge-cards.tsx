import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type BadgeCardsProperties = {
    readonly children?: React.ReactNode;
}

export function BadgeCards({ children }: BadgeCardsProperties) {
    return <Box className={css({
        marginTop: "24px",
        marginBottom: "60px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    })}>
       {children}
    </Box>
};