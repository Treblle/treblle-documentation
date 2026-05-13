"use client";

import { useState, useRef, useCallback } from "react";
import { Box, Flex, HStack } from "~styled-system/jsx";
import { SubmenuPlatform } from "./desktop/submenu-platform";
import { SubmenuTrust } from "./desktop/submenu-trust";
import { SubmenuResources, type LatestBlogPost } from "./desktop/submenu-resources";
import { SubmenuCompany } from "./desktop/submenu-company";
import { SubmenuWhyTreblle } from "./desktop/submenu-why-treblle";
import { MobileNavbar } from "./mobile-menu";
import { Icon } from "../../../theme/icons";
import Link from "next/link";

type MenuKey = "why-treblle" | "platform" | "trust" | "resources" | "company";

const navItems = [
  { key: "why-treblle" as MenuKey, label: "Why Treblle", hasSubmenu: true },
  { key: "platform" as MenuKey, label: "Platform", hasSubmenu: true },
  { key: "trust" as MenuKey, label: "Trust & Compliance", hasSubmenu: true },
  { key: "pricing", label: "Pricing", hasSubmenu: false, link: "https://treblle.com/pricing" },
  { key: "resources" as MenuKey, label: "Resources", hasSubmenu: true },
  { key: "company" as MenuKey, label: "Company", hasSubmenu: true },
];

const rightAligned = new Set<MenuKey>(["resources", "company"]);

function DropdownContent({ menuKey, resourcesBlogPost }: { menuKey: MenuKey; resourcesBlogPost?: LatestBlogPost | null | undefined }) {
  if (menuKey === "why-treblle") return <SubmenuWhyTreblle />;
  if (menuKey === "platform") return <SubmenuPlatform />;
  if (menuKey === "trust") return <SubmenuTrust />;
  if (menuKey === "resources") return <SubmenuResources post={resourcesBlogPost} />;
  return <SubmenuCompany />;
}

const minWidths: Partial<Record<MenuKey, string>> = {
  "why-treblle": "580px",
  platform: "700px",
  resources: "580px",
};

function DesktopNavbar({ resourcesBlogPost }: { resourcesBlogPost?: LatestBlogPost | null | undefined }) {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [itemLeft, setItemLeft] = useState(0);
  const [itemRight, setItemRight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback((item: (typeof navItems)[0], el: HTMLElement) => {
    if (item.hasSubmenu) {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      if (containerRect) {
        setItemLeft(itemRect.left - containerRect.left);
        setItemRight(containerRect.right - itemRect.right);
      }
      setActiveMenu(item.key as MenuKey);
    } else {
      setActiveMenu(null);
    }
  }, []);

  return (
    <Box ref={containerRef} css={{ position: "relative" }} onMouseLeave={() => setActiveMenu(null)}>
      <Flex
        style={{ backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }}
        css={{
          background: "rgba(20, 24, 47, 0.8)",
          border: "1px solid #29304B",
          borderRadius: "36px",
          px: "6",
          py: "4",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Icon icon="TreblleLogo" />
        </Link>

        <HStack css={{ gap: "0", alignSelf: "stretch" }}>
          {navItems.map((item) =>
            item.link ? (
              <Link key={item.label} href={item.link}>
                <Box
                  css={{
                    px: "4",
                    py: "11px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s ease",
                    userSelect: "none",
                    _hover: { background: "rgba(255,255,255,0.08)" },
                  }}
                  onMouseEnter={(e) => handleEnter(item, e.currentTarget as HTMLElement)}
                >
                  {item.label}
                </Box>
              </Link>
            ) : (
              <Box
                key={item.key}
                css={{ position: "relative", alignSelf: "stretch", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => handleEnter(item, e.currentTarget as HTMLElement)}
              >
                <Box
                  css={{
                    px: "4",
                    py: "11px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    background: activeMenu === item.key ? "rgba(255,255,255,0.08)" : "transparent",
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s ease",
                    userSelect: "none",
                  }}
                >
                  {item.label}
                </Box>
              </Box>
            )
          )}
        </HStack>

        <HStack css={{ gap: "2.5" }}>
          <Link href="https://platform.treblle.com/login">
            <Box css={{ px: "4", py: "11px", borderRadius: "30px", fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap" }}>
              Sign In
            </Box>
          </Link>
          <Link href="https://treblle.com/book-a-demo">
            <Box
              css={{
                background: "#0047BB",
                px: "4",
                py: "9px",
                borderRadius: "56px",
                h: "40px",
                display: "flex",
                alignItems: "center",
                fontSize: "sm",
                fontWeight: "medium",
                color: "#FFFFFF",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Request a Demo
            </Box>
          </Link>
        </HStack>
      </Flex>

      {activeMenu && (
        <Box
          style={rightAligned.has(activeMenu) ? { right: `${itemRight}px` } : { left: `${itemLeft}px` }}
          css={{
            position: "absolute",
            top: "calc(95% + 5px)",
            zIndex: "[50]",
            ...(minWidths[activeMenu] ? { minW: `[${minWidths[activeMenu]}]` } : {}),
          }}
        >
          <DropdownContent menuKey={activeMenu} resourcesBlogPost={resourcesBlogPost} />
        </Box>
      )}
    </Box>
  );
}

export function Navbar({ resourcesBlogPost }: { resourcesBlogPost?: LatestBlogPost | null | undefined }) {
  return (
    <Box
      css={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2000,
      }}
    >
      <Box css={{ maxWidth: "1400px", margin: "auto", px: "6", py: "3" }}>
        {/* Desktop nav — hidden below lg */}
        <Box css={{ display: { base: "none", lg: "block" } }}>
          <DesktopNavbar resourcesBlogPost={resourcesBlogPost} />
        </Box>
        {/* Mobile nav — hidden at lg+ */}
        <Box css={{ display: { base: "block", lg: "none" } }}>
          <MobileNavbar resourcesBlogPost={resourcesBlogPost} />
        </Box>
      </Box>
    </Box>
  );
}
