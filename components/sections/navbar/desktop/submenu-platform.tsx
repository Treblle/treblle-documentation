import { Box, Flex, HStack, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import { NavLink as Link } from "../nav-link";

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7H12M8 3L12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type NavItem = {
  name: string;
  url?: string;
  preloadImage?: string;
};

function NavColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <VStack
      css={{ gap: "22px", alignItems: "flex-start", flex: "1 0 0", minW: "0" }}
    >
      <Box
        css={{
          fontSize: "xs",
          fontWeight: "semibold",
          color: "[#676F88]",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </Box>
      {items.map((item) =>
        item.url ? (
          <Link
            key={item.name}
            href={item.url}
            className={css({
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "1.5",
              _hover: { color: "[#5192FF]" },
            })}
          >
            {item.name}
            <ArrowRight />
          </Link>
        ) : (
          <Box
            key={item.name}
            css={{
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              cursor: "pointer",
              whiteSpace: "nowrap",
              _hover: { color: "[#5192FF]" },
            }}
          >
            {item.name}
          </Box>
        ),
      )}
    </VStack>
  );
}

function HighlightCard({
  label,
  description,
  linkText,
  link,
}: {
  label: string;
  description: string;
  linkText: string;
  link: string;
}) {
  return (
    <Link href={link} className={css({ w: "full" })}>
      <Box
        css={{
          background: "[#22263C]",
            border: "1px solid",
            borderColor: "[#29304B]",
          borderRadius: "10px",
          p: "4",
          display: "flex",
          flexDirection: "column",
          gap: "6",
          _hover: { opacity: "0.85" },
          transition: "opacity 0.15s",
        }}
      >
        <VStack css={{ gap: "2.5", alignItems: "flex-start" }}>
          <Box css={{ fontSize: "sm", fontWeight: "medium", color: "[#9EA2BD]" }}>
            {label}
          </Box>
          <Box css={{ fontSize: "md", color: "white" }}>{description}</Box>
        </VStack>
        <Flex css={{ gap: "1.5", alignItems: "center", color: "white", _hover: { color: "[#5192FF]" }, transition: "color 0.15s" }}>
          <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>
            {linkText}
          </Box>
          <ArrowRight />
        </Flex>
      </Box>
    </Link>
  );
}

export function SubmenuPlatform() {
  return (
    <Box
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      css={{
        background: "[rgba(20,24,47,0.95)]",
        border: "1px solid",
        borderColor: "[#29304B]",
        borderRadius: "20px",
        p: "5",
        display: "flex",
        gap: "10",
        alignItems: "flex-start",
      }}
    >
      <HStack css={{ gap: "16", alignItems: "flex-start", flex: "1" }}>
        <NavColumn
          title="What We Solve"
          items={[
            {
              name: "Agentic Delivery Acceleration",
              url: "https://treblle.com/agentic-delivery-acceleration",
              preloadImage: "https://treblle.com/pages/agentic-delivery-acceleration/hero/background.png",
            },
            {
              name: "Sprawl Management",
              url: "https://treblle.com/sprawl-managment",
              preloadImage: "https://treblle.com/pages/sprawl-managment/hero/background.png",
            },
            {
              name: "Operational Blindness",
              url: "https://treblle.com/operational-blindness",
              preloadImage: "https://treblle.com/pages/operational-blindness/hero/background.png",
            },
            {
              name: "Security and Compliance",
              url: "https://treblle.com/security-compliance",
              preloadImage: "https://treblle.com/pages/security-compliance/hero/background.png",
            },
          ]}
        />
        <NavColumn
          title="Who Is It For"
          items={[
            {
              name: "Enterprise Architects",
              url: "https://treblle.com/enterprise-architects",
              preloadImage: "https://treblle.com/pages/enterpriese-architects/hero/background.png",
            },
            {
              name: "Platform Engineering",
              url: "https://treblle.com/platform-engineering",
              preloadImage: "https://treblle.com/pages/platform-engineering/hero/background.png",
            },
            {
              name: "InfoSec Teams",
              url: "https://treblle.com/infosec-teams",
              preloadImage: "https://treblle.com/pages/infosec-teams/hero/background.png",
            },
            {
              name: "Product Innovators",
              url: "https://treblle.com/product-innovators",
              preloadImage: "https://treblle.com/pages/product-innovators/hero/background.png",
            },
            { name: "Engineering Leadership", url: "https://treblle.com/engineering-leadership" },
          ]}
        />
        <NavColumn
          title="Technology"
          items={[
            { name: "Integrations", url: "/integrate-treblle/treblle-integrations" },
            { name: "Documentation", url: "/" },
            { name: "Deployment Options", url: "https://treblle.com/deployment-options" },
            { name: "Release Notes", url: "https://treblle.com/news?tab=release-notes" },
          ]}
        />
      </HStack>

      <VStack css={{ gap: "3", flexShrink: "0", w: "[240px]" }}>
        <HighlightCard
          label="Integrations"
          description="Works with the gateway you already run."
          linkText="View Integrations"
          link="/integrate-treblle/treblle-integrations"
        />
        <HighlightCard
          label="Release Notes"
          description="Documentation editor and a dual-layer governance system."
          linkText="Read More"
          link="https://treblle.com/news?tab=release-notes"
        />
      </VStack>
    </Box>
  );
}
