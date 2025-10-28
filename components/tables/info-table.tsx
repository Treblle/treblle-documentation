import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type InfoTableProperties = {
    readonly children?: React.ReactNode;
    readonly title?: string;
    readonly description?: string;
};

export function InfoTable({ children, title, description }: InfoTableProperties) {
    return (
        <Box
            className={css({
                display: "flex",
                flexDirection: "column",
                width: "100%",
            })}
        >
            <Box
                className={css({
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid #29304b",
                    paddingY: "12px",
                })}
            >
                <Box
                    className={css({
                        width: "30%",
                        fontSize: "16px",
                        fontWeight: "500",
                    })}
                >
                    <p>{title}</p>
                </Box>
                <Box
                    className={css({
                        width: "70%",
                        fontSize: "16px",
                        fontWeight: "500",
                    })}
                >
                    <p>{description}</p>
                </Box>
            </Box>
            {children}
        </Box>
    );
}

InfoTable.Row = function InfoTableRow({ title, description }: InfoTableProperties) {
    return (
        <Box
            className={css({
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid #29304b",
                paddingY: "12px",
            })}
        >
            <Box
                className={css({
                    width: "30%",
                    fontSize: "16px",
                    fontWeight: "400",
                })}
            >
                <p>{title}</p>
            </Box>
            <Box
                className={css({
                    width: "70%",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "darkElement.500"
                })}
            >
                <p>{description}</p>
            </Box>
        </Box>
    );
};
