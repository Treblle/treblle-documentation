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
                maxWidth: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "start",
                marginTop: "16px",
                border: "1px solid #a9adca",
                borderRadius: "22px",
                padding: "26px 100px 14px 26.8px",
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
