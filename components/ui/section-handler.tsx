"use client";
import { Button } from "nextra/components";
import { useState } from "react";

import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type Properties = {
    readonly title?: string;
    readonly sectionClass?: string;
};

export default function SectionHandler({ title, sectionClass }: Properties) {
    const [isOpen, setIsOpen] = useState(true);
    function toggleSection() {
        setIsOpen(!isOpen);
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        document.querySelector(`.${sectionClass}`)?.classList.toggle("hidden");
    }

    const icon = <Icon icon="ArrowDown" className={css({ transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" })} />;
    console.log(isOpen);

    return (
        <Box
            className={css({
                padding: "32px 16px 0px 16px",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
                display: { base: "flex", md: "none" },
            })}
        >
            <h1 className={css({ color: "neutral.400" })}>{title}</h1>

            <Button className={css({ color: "neutral.400" })} onClick={toggleSection}>
                {" "}
                {icon}
            </Button>
        </Box>
    );
}
