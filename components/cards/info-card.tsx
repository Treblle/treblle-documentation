import Image from "next/image";

import { Card } from "~components/ui/card";
import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type InfoCardType = "group" | "tip" | "caution" | "individual" | "note" | "badge";

type InfoCardProperties = {
    readonly children: React.ReactNode;
    readonly type: InfoCardType;
}

export function InfoCard({ children, type }: InfoCardProperties) {
    switch(type) {
        case "group": {
            return <Card variant="group" size="group">{children}</Card>;
        }
        case "tip": {
            return <Card variant="tip" size="individual">{children}</Card>;
        }
        case "caution": {
            return <Card variant="caution" size="individual">{children}</Card>;
        }
        case "individual": {
            return <Card variant="individual" size="individual">{children}</Card>;
        }
        case "note": {
            return <Card variant="note" size="individual">{children}</Card>;
        }
        case "badge": {
            return <Card variant="badge" size="badge">{children}</Card>;
        }
        default: {
            return <Card variant="group" size="group">{children}</Card>;
        }
    }
}

InfoCard.Image = function InfoCardImage({ src, alt }: { readonly src: string; readonly alt: string }) {
    return <Image src={src} alt={alt} width={64} height={64} />;
}

InfoCard.Name = function InfoCardName({ children }: { readonly children: string }) {
    return <h3>{children}</h3>;
}

InfoCard.title = function InfoCardTitle({ children }: {readonly children: React.ReactNode }) {
    return <Box className={css({
                display: "flex",
                alignItems: "center",
                gap:"5px",
                cursor: "pointer",
                paddingY: "4px",
                marginBottom: "17px",
            })}>
                <h3 className={css({fontSize:"20px"})}>{children}</h3>
                <Icon icon="ArrowRight" />
            </Box>
}

InfoCard.description = function InfoCardDescription({ children }: {readonly children: React.ReactNode }) {
    return <Box className={css({
                fontSize: "14px",
                color: "darkElement.500",
                lineHeight:"1.29",
            })}>{children}</Box>
}