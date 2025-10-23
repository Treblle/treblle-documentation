import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

type InfoProperties = {
    readonly children: React.ReactNode;
}

export function InfoCards({ children }: InfoProperties) {
    return <Box className={css({
        marginTop: "24px",
        marginBottom: "60px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    })}>
        {children}
    </Box>
}