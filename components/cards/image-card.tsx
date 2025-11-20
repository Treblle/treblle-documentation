import Image from "next/image";

import { css } from "~styled-system/css";

type ImageCardProperties = {
    readonly src: string;
    readonly alt: string;
};

export function ImageCard({ src, alt }: ImageCardProperties) {
    return (
        <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className={css({
                borderRadius: "8px",
                marginY: "16px",
                maxWidth: "100%",
            })}
        />
    );
}
