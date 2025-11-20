"use client";
import { usePathname } from "next/navigation";
import { Button } from "nextra/components";
import { useState } from "react";

import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../theme/icons";

type Properties = {
    readonly title?: string;
    readonly sectionClass?: string;
};

export default function MobileSidebarToggle({ title, sectionClass }: Properties) {
    const path = usePathname();

    const [isOpen, setIsOpen] = useState(true);
    function toggleSection() {
        setIsOpen(!isOpen);
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        document.querySelector(`.${sectionClass}`)?.classList.toggle("hidden");
    }

    const icon = (
        <Icon
            icon="ArrowDown"
            className={css({
                transition: "transform 0.2s",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            })}
        />
    );

    if (path === "/") return;
    return (
        <Box
            className={css({
                padding: "32px 16px 0px 16px",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
                display: { base: "flex", md: "none" },
            })}
            onClick={toggleSection}
        >
            <h1 className={css({ color: "neutral.400" })}>{title}</h1>

            <Button className={css({ color: "neutral.400" })}> {icon}</Button>
        </Box>
    );
}
