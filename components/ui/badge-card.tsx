import Image from "next/image";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx/box";

type BadgeCardProperties = {
    readonly children?: React.ReactNode;
};

export function BadgeCard({ children }: BadgeCardProperties) {
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
           {children}
        </Box>
}

BadgeCard.Image = function BadgeCardImage({ src, alt }: { readonly src: string; readonly alt: string }) {
    return <Image src={src} alt={alt} width={64} height={64} />;
}

BadgeCard.Title = function BadgeCardTitle({ children }: { readonly children: string }) {
    return <h3>{children}</h3>;
}