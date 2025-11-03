import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type ChecklistProperties = {
    readonly children?: React.ReactNode;
    readonly id?: string;
};

export function Checklist({ children }: ChecklistProperties) {
    return (
        <Box
            className={css({
                marginTop: "16px",
            })}
        >
            {children}
        </Box>
    );
}

Checklist.item = function ChecklistItem({ children, id }: ChecklistProperties) {
    return (
        <Box
            className={css({
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "16px",
            })}
        >
            <input
                id={id}
                type="checkbox"
                className={css({
                    appearance: "none",
                    width: "14px",
                    height: "14px",
                    borderRadius: "3px",
                    border: "1px solid #bcc0d9",
                    cursor: "pointer",
                    position: "relative",
                    "&:checked": {
                        backgroundColor: "#0058ff",
                        borderColor: "#0058ff",
                        "&::after": {
                            content: "''",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -60%) rotate(45deg)",
                            width: "3px",
                            height: "7px",
                            border: "solid white",
                            borderWidth: "0 1px 1px 0",
                        },
                    },
                })}
            />
        <label htmlFor={id}>{children}</label>
        </Box>
    );
};
