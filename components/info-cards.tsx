import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { InfoCard } from "./ui/infor-card";

type InfoProperties = {
    readonly info : Array<[title: string, description: string]>
}

export function InfoCards({ info }: InfoProperties) {
    return <Box className={css({
        marginTop: "24px",
        marginBottom: "60px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    })}>
        {info.map(([title, description]) => (
            <InfoCard key={title} title={title} description={description} type="group"/>
        ))}
    </Box>
}