"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, VStack } from "~styled-system/jsx";
import { SubmenuWhyTreblleMobile } from "./submenu-why-treblle";
import { SubmenuPlatformMobile } from "./submenu-platform";
import { SubmenuTrustMobile } from "./submenu-trust";
import { SubmenuResourcesMobile } from "./submenu-resources";
import { SubmenuCompanyMobile } from "./submenu-company";
import { NavLink as Link } from "../nav-link";
import { Icon } from "../../../../theme/icons";
import { css } from "~styled-system/css";
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

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SubmenuContent({
  menuKey,
  featuredStory,
  resourcesBlogPost,
}: {
  menuKey: MenuKey;
  featuredStory?: FeaturedStory | null | undefined;
  resourcesBlogPost?: LatestBlogPost | null | undefined;
}) {
  if (menuKey === "why-treblle") return <SubmenuWhyTreblleMobile featuredStory={featuredStory} />;
  if (menuKey === "platform") return <SubmenuPlatformMobile />;
  if (menuKey === "trust") return <SubmenuTrustMobile />;
  if (menuKey === "resources") return <SubmenuResourcesMobile post={resourcesBlogPost} />;
  return <SubmenuCompanyMobile />;
}

function BottomButtons() {
  return (
    <VStack css={{ gap: "4", w: "full", flexShrink: "0" }}>
      <Link
        href={"https://app.treblle.com"}
        target="_blank"
        className={css({ w: "full" })}
      >
        <Box
          css={{
            background: "transparent",
            border: "1px solid",
            borderColor: "[#29304B]",
            borderRadius: "56px",
            h: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: "full",
            fontSize: "sm",
            fontWeight: "medium",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sign In
        </Box>
      </Link>
      <Link href={"https://treblle.com/book-a-demo"} className={css({ w: "full" })}>
        <Box
          css={{
            background: "[#0047BB]",
            borderRadius: "56px",
            h: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: "full",
            fontSize: "sm",
            fontWeight: "medium",
            color: "white",
            cursor: "pointer",
          }}
        >
          Request a Demo
        </Box>
      </Link>
    </VStack>
  );
}

export function MobileNavbar({
  featuredStory,
  resourcesBlogPost,
}: {
  featuredStory?: FeaturedStory | null | undefined;
  resourcesBlogPost?: LatestBlogPost | null | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [animState, setAnimState] = useState<"opening" | "closing" | null>(
    null,
  );
  const [activeSubmenu, setActiveSubmenu] = useState<MenuKey | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setActiveSubmenu(null);
    setAnimState(null);
  }, [pathname]);

  const open = () => {
    setIsOpen(true);
    setAnimState("opening");
    setTimeout(() => setAnimState(null), 250);
  };

  const close = () => {
    setAnimState("closing");
    setTimeout(() => {
      setIsOpen(false);
      setActiveSubmenu(null);
      setAnimState(null);
    }, 220);
  };

  if (!isOpen) {
    return (
      <Flex
        style={{
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
        css={{
          background: "[rgba(20,24,47,0.95)]",
          border: "1px solid",
          borderColor: "[#29304B]",
          borderRadius: "36px",
          px: "6",
          py: "4",
          h: "72px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"}>
          <Icon icon="TreblleLogo" />
        </Link>
        <Box
          css={{
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          onClick={open}
        >
          <HamburgerIcon />
        </Box>
      </Flex>
    );
  }

  return (
    <Box
      style={{
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        animation:
          animState === "opening"
            ? "navbarOpen 0.25s ease forwards"
            : animState === "closing"
              ? "navbarClose 0.22s ease forwards"
              : undefined,
      }}
      css={{
        background: "[rgba(20,24,47,0.95)]",
        border: "1px solid",
        borderColor: "[#29304B]",
        borderRadius: "36px",
        px: "6",
        py: "[22px]",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        w: "full",
        maxH: "90vh",
      }}
    >
      {/* Header row */}
      <Flex
        css={{
          alignItems: "center",
          justifyContent: "space-between",
          h: "28px",
          flexShrink: "0",
        }}
      >
        {activeSubmenu ? (
          <Flex
            css={{
              gap: "2",
              alignItems: "center",
              cursor: "pointer",
              color: "white",
              flex: "1",
            }}
            onClick={() => setActiveSubmenu(null)}
          >
            <ChevronLeftIcon />
            <Box css={{ fontSize: "sm", fontWeight: "medium" }}>Back</Box>
          </Flex>
        ) : (
          <Link href={"/"}>
            <Icon icon="TreblleLogo" />
          </Link>
        )}
        <Box
          css={{
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          onClick={close}
        >
          <CloseIcon />
        </Box>
      </Flex>

      {/* Scrollable content */}
      <Box css={{ overflowY: "auto", flex: "1", minH: "0" }}>
        {activeSubmenu ? (
          <SubmenuContent
            menuKey={activeSubmenu}
            featuredStory={featuredStory}
            resourcesBlogPost={resourcesBlogPost}
          />
        ) : (
          <VStack css={{ gap: "[29px]", alignItems: "flex-start", w: "full" }}>
            {navItems.map((item) =>
              item.link ? (
                <Link key={item.key} href={item.link}>
                  <Box
                    css={{
                      fontSize: "sm",
                      fontWeight: "medium",
                      color: "white",
                    }}
                  >
                    {item.label}
                  </Box>
                </Link>
              ) : (
                <Flex
                  key={item.key}
                  css={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    w: "full",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (item.hasSubmenu) setActiveSubmenu(item.key as MenuKey);
                  }}
                >
                  <Box
                    css={{
                      fontSize: "sm",
                      fontWeight: "medium",
                      color: "white",
                    }}
                  >
                    {item.label}
                  </Box>
                  {item.hasSubmenu && (
                    <Box
                      css={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ChevronRightIcon />
                    </Box>
                  )}
                </Flex>
              ),
            )}
          </VStack>
        )}
      </Box>

      <BottomButtons />
    </Box>
  );
}
