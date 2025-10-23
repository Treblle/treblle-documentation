import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type FAQProperties = {
    readonly children: React.ReactNode;
};

export function FAQ({ children }: FAQProperties) {
    return <Box className={css({
        marginBottom: "60px",
    })}>
        {children}
    </Box>;
}