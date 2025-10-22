import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { BadgeCard } from "./ui/badge-card";

type BadgeCardsProperties = {
    readonly badgeCardData: Array<[ imageSrc: string,imageAlt: string, title: string]>;
}

export function BadgeCards({ badgeCardData }: BadgeCardsProperties) {
    return <Box className={css({
        marginTop: "24px",
        marginBottom: "60px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    })}>
       {badgeCardData.map(([imageSource, imageAlt, title]) => (
           <BadgeCard key={title} imageSrc={imageSource} imageAlt={imageAlt} title={title} />
       ))}
    </Box>
};