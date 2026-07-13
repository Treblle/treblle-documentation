"use client";

import { useState, useRef, useCallback, type MouseEvent } from "react";
import { Box, Flex, HStack } from "~styled-system/jsx";
import { SubmenuPlatform } from "./submenu-platform";
import { SubmenuTrust } from "./submenu-trust";
import { SubmenuResources } from "./submenu-resources";
import { SubmenuCompany } from "./submenu-company";
import { SubmenuWhyTreblle } from "./submenu-why-treblle";
import { Icon } from "../../../../theme/icons";
import { NavLink as Link } from "../nav-link";
import type { FeaturedStory, LatestBlogPost } from "~sanity/nav-queries";

type MenuKey = "why-treblle" | "platform" | "trust" | "resources" | "company";

const navItems = [
  { key: "why-treblle" as MenuKey, label: "Why Treblle", hasSubmenu: true },
  { key: "platform" as MenuKey, label: "Platform", hasSubmenu: true },
  { key: "trust" as MenuKey, label: "Trust & Compliance", hasSubmenu: true },
  { key: "pricing", label: "Pricing", hasSubmenu: false, link: "https://treblle.com/pricing" },
  { key: "resources" as MenuKey, label: "Resources", hasSubmenu: true },
  { key: "company" as MenuKey, label: "Company", hasSubmenu: true },
];

const rightAligned = new Set<MenuKey>();

function DropdownContent({
  menuKey,
  featuredStory,
  resourcesBlogPost,
}: {
  menuKey: MenuKey;
  featuredStory?: FeaturedStory | null | undefined;
  resourcesBlogPost?: LatestBlogPost | null | undefined;
}) {
  if (menuKey === "why-treblle") return <SubmenuWhyTreblle featuredStory={featuredStory} />;
  if (menuKey === "platform") return <SubmenuPlatform />;
  if (menuKey === "trust") return <SubmenuTrust />;
  if (menuKey === "resources") return <SubmenuResources post={resourcesBlogPost} />;
  return <SubmenuCompany />;
}

const minWidths: Partial<Record<MenuKey, string>> = {
  platform: "700px",
};

const fixedWidths: Partial<Record<MenuKey, string>> = {};

const transforms: Partial<Record<MenuKey, string>> = {
  platform: "translateX(-20%)",
};

export function Navbar({
  featuredStory,
  resourcesBlogPost,
}: {
  featuredStory?: FeaturedStory | null | undefined;
  resourcesBlogPost?: LatestBlogPost | null | undefined;
}) {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [itemLeft, setItemLeft] = useState(0);
  const [itemRight, setItemRight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(
    (item: (typeof navItems)[0], el: HTMLElement) => {
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
    },
    [],
  );

  return (
    <Box
      ref={containerRef}
      css={{ position: "relative", pb: "2.5" }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <Flex
        style={{
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
        css={{
          background: "[rgba(20,24,47,0.8)]",
          border: "1px solid",
          borderColor: "[#29304B]",
          borderRadius: "36px",
          px: "6",
          py: "4",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"}>
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
                    color: "white",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s ease",
                    userSelect: "none",
                    _hover: {
                      background: "[rgba(255,255,255,0.08)]",
                    },
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLElement>) =>
                    handleEnter(item, e.currentTarget)
                  }
                >
                  {item.label}
                </Box>
              </Link>
            ) : (
              <Box
                key={item.key}
                css={{
                  position: "relative",
                  alignSelf: "stretch",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e: MouseEvent<HTMLElement>) =>
                  handleEnter(item, e.currentTarget)
                }
              >
                <Box
                  css={{
                    px: "4",
                    py: "11px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    background:
                      activeMenu === item.key ? "[rgba(255,255,255,0.08)]" : "transparent",
                    fontSize: "sm",
                    fontWeight: "medium",
                    color: "white",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s ease",
                    userSelect: "none",
                  }}
                >
                  {item.label}
                </Box>
              </Box>
            ),
          )}
        </HStack>

        <HStack css={{ gap: "2.5" }}>
          <Link href={"https://app.treblle.com"} target="_blank">
            <Box
              css={{
                px: "4",
                py: "11px",
                borderRadius: "30px",
                fontSize: "sm",
                fontWeight: "medium",
                color: "white",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Sign In
            </Box>
          </Link>
          <Link href={"https://treblle.com/book-a-demo"}>
            <Box
              css={{
                background: "[#0047BB]",
                px: "4",
                py: "9px",
                borderRadius: "56px",
                h: "40px",
                display: "flex",
                alignItems: "center",
                fontSize: "sm",
                fontWeight: "medium",
                color: "white",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Request a Demo
            </Box>
          </Link>
        </HStack>
      </Flex>

      {/* Rendered OUTSIDE the blurred Flex so backdrop-filter works on page content */}
      {activeMenu && (
        <Box
          style={
            rightAligned.has(activeMenu)
              ? { right: `${itemRight}px` }
              : {
                  left: `${itemLeft}px`,
                  ...(transforms[activeMenu] ? { transform: transforms[activeMenu] } : {}),
                }
          }
          css={{
            position: "absolute",
            top: "calc(95% + 5px)",
            zIndex: "[50]",
            ...(fixedWidths[activeMenu]
              ? { w: `[${fixedWidths[activeMenu]}]` }
              : minWidths[activeMenu]
              ? { minW: `[${minWidths[activeMenu]}]` }
              : {}),
          }}
        >
          <DropdownContent
            menuKey={activeMenu}
            featuredStory={featuredStory}
            resourcesBlogPost={resourcesBlogPost}
          />
        </Box>
      )}
    </Box>
  );
}
