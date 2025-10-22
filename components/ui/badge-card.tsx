import Image from "next/image";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx/box";

type BadgeCardProperties = {
    readonly imageSrc: string;
    readonly imageAlt: string;
    readonly title: string;
};

export function BadgeCard({ imageSrc, imageAlt, title }: BadgeCardProperties) {
    return  <Box className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            gap:"14.1px",
            borderRadius: "12px",
            width:"260px",
            border: "1px solid",
            borderColor: "darkElement.200",
        })}>
            <Image src={imageSrc} alt={imageAlt} width={101.5} height={101.5}/>
            <p>{title}</p>
        </Box>
}