"use client";
import { useEffect, useState } from "react";

import { MobileMenu } from "~components/sections/navbar/mobile-menu.tsx";
import { ProductMenu } from "~components/sections/navbar/product-menu.tsx";
import { ResourcesMenu } from "~components/sections/navbar/resources-menu.tsx";
import { SolutionsMenu } from "~components/sections/navbar/solutions-menu.tsx";
import { Button } from "~components/ui/button.tsx";
import { Link } from "~components/ui/link.tsx";
import { css, cx } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { ButtonIcon, Icon } from "../../../theme/icons";

export function Navbar() {
    const [isMobileOpened, setIsMobileOpened] = useState(false);

    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            css={{
                backgroundColor: isScrolled || isMobileOpened ? "neutral.midnight" : "transparent",
                position: "sticky",
                transition: "background-color 0.3s ease",
                top: 0,
                left: 0,
                width: "100vw",
                height: "auto",
                zIndex: 2000,
            }}
        >
            <Box
                css={{
                    maxWidth: "1400px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "auto",
                    paddingY: { base: "18px", lg: "12px" },
                    paddingX: "24px",
                }}
            >
                <Box css={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <Link eventName="navbar_logo" href="/">
                        <Icon icon="TreblleLogo" />
                    </Link>
                    <Box
                        css={{
                            display: { base: "none", lg: "flex" },
                            alignItems: "center",
                            color: "neutral.white",
                        }}
                    >
                        <Box className={cx("group", DesktopLink)}>
                            Product
                            <Icon icon="ChevronDown" className={DesktopLinkChevron} />
                            <ProductMenu />
                        </Box>
                        <Link
                            eventName="navbar_enterprise"
                            href="https://treblle.com/enterprise"
                            className={DesktopLink}
                        >
                            Enterprise
                        </Link>
                        <Box className={cx("group", DesktopLink)}>
                            Solutions
                            <Icon icon="ChevronDown" className={DesktopLinkChevron} />
                            <SolutionsMenu />
                        </Box>
                        <Box className={cx("group", DesktopLink)}>
                            <Link
                                eventName="navbar_documentation"
                                href="https://docs.treblle.com"
                                target="_blank"
                                className={DesktopLink}
                            >
                                Documentation
                            </Link>
                        </Box>
                        <Link
                            eventName="navbar_pricing"
                            href="https://treblle.com/pricing"
                            className={DesktopLink}
                        >
                            Pricing
                        </Link>
                        <Box className={cx("group", DesktopLink)}>
                            Resources
                            <Icon icon="ChevronDown" className={DesktopLinkChevron} />
                            <ResourcesMenu />
                        </Box>
                    </Box>
                </Box>

                <Box
                    css={{
                        display: "flex",
                        gap: "16px",
                        flexShrink: 0,
                        fontSize: "14px",
                        lineHeight: "16px",
                        color: "neutral.white",
                        alignItems: "center",
                    }}
                >
                    <Link
                        eventName="navbar_signin"
                        className={css({
                            transition: "color 0.2s ease",
                            _hover: { color: "darkElement.500" },
                            display: { base: "none", xl: "inline-flex" },
                        })}
                        href="https://identity.treblle.com/login?redirect_url=https://platform.treblle.com"
                    >
                        Sign In
                    </Link>
                    <Box
                        css={{
                            width: "1px",
                            height: "18px",
                            backgroundColor: "darkElement.200",
                            display: { base: "none", xl: "inline-flex" },
                        }}
                    />
                    <Link
                        eventName="navbar_getstarted"
                        className={css({
                            transition: "color 0.2s ease",
                            _hover: { color: "darkElement.500" },
                            display: { base: "none", xl: "inline-flex" },
                        })}
                        href="https://identity.treblle.com/register?redirect_url=https://platform.treblle.com"
                    >
                        Sign up
                    </Link>
                    <Button
                        eventName="navbar_demo"
                        asChild
                        css={{ display: { base: "none", lg: "inline-flex" } }}
                    >
                        <Link href="https://treblle.com/book-a-demo">Book a Demo</Link>
                    </Button>
                    <ButtonIcon
                        className={css({
                            display: { base: "block", lg: "none" },
                            color: "darkElement.500",
                            cursor: "pointer",
                        })}
                        icon={isMobileOpened ? "Close" : "Menu"}
                        onClick={() => {
                            setIsMobileOpened(!isMobileOpened);
                        }}
                    />
                </Box>
            </Box>
            <MobileMenu isOpened={isMobileOpened} setIsMenuOpened={setIsMobileOpened} />
            <Box
                css={{
                    width: "100%",
                    height: "1px",
                    backgroundImage:
                        "linear-gradient(to right, rgba(71, 78, 111, 0) 0%, #22263c 28%, #22263c 74%, rgba(34, 38, 60, 0))",
                }}
            />
        </Box>
    );
}

const DesktopLink = css({
    color: "neutral.white",
    paddingX: "16px",
    paddingY: "10px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: "16px",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    position: "relative",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});

const DesktopLinkChevron = css({
    transition: "transform 0.5s ease",
    _groupHover: {
        transform: "rotate(180deg)",
    },
});
