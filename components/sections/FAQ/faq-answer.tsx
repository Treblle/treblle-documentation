import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type AnswerProperties = {
    readonly children?: React.ReactNode;
    readonly isOpen: boolean;
};

export function Answer({ children, isOpen }: AnswerProperties) {
    return (
        <Box
            className={css({
                maxHeight: isOpen ? "none" : "0px",
                opacity: isOpen ? 1 : 0,
                userSelect: isOpen ? "auto" : "none",
                visibility: isOpen ? "visible" : "hidden",
                color: "darkElement.400",
                transform: isOpen ? "translateY(0px)" : "translateY(-10px)",
                marginTop: isOpen ? "24px" : "0px",
                fontSize: "14px",
                transition: "all 0.4s ease",
                overflow: "hidden",
            })}
        >
            {children}
        </Box>
    );
}