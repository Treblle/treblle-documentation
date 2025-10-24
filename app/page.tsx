import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type LandingPageCardsProperties = {
    readonly icon?: React.ReactNode;
    readonly title?: string;
    readonly description?: string;
};

export default function LandingPageCards({icon, title, description} : LandingPageCardsProperties) {
    return (
        <Box
            className={css({
                width: {base: "100%", lg: "300px"},
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "start",
                marginTop: "16px",
                border: "1px solid #29304b",
                borderRadius: "22px",
                padding: "26px 100px 14px 26.8px",

                "&:hover": {
                    transition: "all 0.5s ease-in-out",
                    borderColor: "#a9adca",
                },
            })}
        >
            {icon}
            <h1
                className={css({
                    fontSize: "24px",
                })}
            >
                {title}
            </h1>
            <p className={css({
                fontSize: "16px",
                color: "lightElement.400",
            })}>{description}</p>
        </Box>
    );
}

