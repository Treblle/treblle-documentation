import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type InfoCardProperties = {
    readonly title : string,
    readonly description : string,
    readonly type: "individual" | "group"
}

export function InfoCard({ title, description, type }: InfoCardProperties) {
    return <Box className={css({
            border: "1px solid",
            borderColor: "darkElement.200",
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            maxWidth: type === "individual" ? "100%" : "400px",
            marginTop: type === "individual" ? "40px" : "0",
            marginBottom: type === "individual" ? "60px" : "0",
            "&:hover": {
                backgroundColor:"#1b1e31",
            }
        })}>
            <Box className={css({
                display: "flex",
                alignItems: "center",
                gap:"5px",
                cursor: "pointer",
                paddingY: "4px",
                marginBottom: "17px",
            })}>
                <h3 className={css({fontSize:"20px"})}>{title}</h3>
                <Icon icon="ArrowRight" />
            </Box>
            <p className={css({
                fontSize: "14px",
                color: "darkElement.500",
                lineHeight:"1.29",
            })}>{description}</p>
        </Box>
}