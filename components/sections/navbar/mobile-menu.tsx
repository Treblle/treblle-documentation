import { useEffect, useState } from "react";

import { ProductMobileMenu } from "~components/sections/navbar/product-mobile-menu.tsx";
import { ResourcesMobileMenu } from "~components/sections/navbar/resources-mobile-menu.tsx";
import { SolutionsMobileMenu } from "~components/sections/navbar/solutions-mobile-menu.tsx";
import { Link } from "~components/ui/link.tsx";
import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../../../theme/icons";

type MobileMenuProperties = {
    readonly isOpened: boolean;
    readonly setIsMenuOpened: (isOpened: boolean) => void;
};

enum ActiveSubmenu {
    product = "product",
    solutions = "solutions",
    resources = "resources",
}

export function MobileMenu({ isOpened, setIsMenuOpened }: MobileMenuProperties) {
    const [activeSubmenu, setActiveSubmenu] = useState<ActiveSubmenu | undefined>();

    const closeMenu = () => {
        setIsMenuOpened(false);
    };

    const closeSubmenu = () => {
        setActiveSubmenu(undefined);
    };

    useEffect(() => {
        if (!isOpened) {
            setActiveSubmenu(undefined);
        }
    }, [isOpened]);

    return (
        <>
            <Box
                css={{
                    backgroundColor: "neutral.midnight",
                    position: "fixed",
                    top: "66px",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "max-height 0.3s",
                    maxHeight: isOpened ? "calc(100vh - 66px)" : "0",
                    display: { base: "flex", lg: "none" },
                    flexDirection: "column",
                    zIndex: 2000,
                    overflow: "hidden",
                }}
            >
                <Box
                    className={MobileLink}
                    onClick={() => {
                        setActiveSubmenu(ActiveSubmenu.product);
                    }}
                >
                    Product
                    <Icon icon="ChevronDown" className={MobileLinkChevron} />
                </Box>
                <Link
                    eventName="navbar_enterprise"
                    href="https://treblle.com/enterprise"
                    className={MobileLink}
                    onClick={closeMenu}
                >
                    Enterprise
                </Link>
                <Box
                    className={MobileLink}
                    onClick={() => {
                        setActiveSubmenu(ActiveSubmenu.solutions);
                    }}
                >
                    Solutions
                    <Icon icon="ChevronDown" className={MobileLinkChevron} />
                </Box>
                <Link
                    eventName="navbar_documentation"
                    href="https://docs.treblle.com"
                    target="_blank"
                    className={MobileLink}
                    onClick={closeMenu}
                >
                    Documentation
                </Link>
                <Link
                    eventName="navbar_pricing"
                    href="https://treblle.com/pricing"
                    className={MobileLink}
                    onClick={closeMenu}
                >
                    Pricing
                </Link>
                <Box
                    className={MobileLink}
                    onClick={() => {
                        setActiveSubmenu(ActiveSubmenu.resources);
                    }}
                >
                    Resources
                    <Icon icon="ChevronDown" className={MobileLinkChevron} />
                </Box>
                <Link
                    eventName="navbar_demo"
                    href="https://treblle.com/book-a-demo"
                    className={MobileLink}
                    onClick={closeMenu}
                >
                    Book a Demo
                </Link>
                <Link
                    eventName="navbar_signin"
                    href="https://identity.treblle.com/login?redirect_url=https://platform.treblle.com"
                    className={MobileLink}
                    target="_blank"
                    onClick={closeMenu}
                >
                    Sign In
                </Link>
                <Link
                    eventName="navbar_getstarted"
                    href="https://identity.treblle.com/register?redirect_url=https://platform.treblle.com"
                    className={MobileLink}
                    target="_blank"
                    onClick={closeMenu}
                >
                    Get Started
                </Link>
            </Box>
            <ProductMobileMenu
                isActive={activeSubmenu === ActiveSubmenu.product}
                close={closeSubmenu}
                closeMainMenu={closeMenu}
            />
            <SolutionsMobileMenu
                isActive={activeSubmenu === ActiveSubmenu.solutions}
                close={closeSubmenu}
                closeMainMenu={closeMenu}
            />
            <ResourcesMobileMenu
                isActive={activeSubmenu === ActiveSubmenu.resources}
                close={closeSubmenu}
                closeMainMenu={closeMenu}
            />
        </>
    );
}

const MobileLink = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px !important",
    fontSize: "14px",
    lineHeight: "16px",
    color: "neutral.white",
    borderBottomWidth: "1px",
    borderColor: "darkElement.200",
    cursor: "pointer",
});

const MobileLinkChevron = css({
    transform: "rotate(-90deg)",
    color: "neutral.white",
});
