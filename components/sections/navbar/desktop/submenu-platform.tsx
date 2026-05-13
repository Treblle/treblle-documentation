import Image from "next/image";
import { Box, Flex, HStack, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import Link from "next/link";

const integrationsCardBg = "/navigation/platform-integrations.png";
const releaseNotesCardBg = "/navigation/platform-release-notes-bg.png";

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type NavItem = { name: string; url?: string };

function NavColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <VStack css={{ gap: "22px", alignItems: "flex-start", flex: "1 0 0", minW: "0" }}>
      <Box css={{ fontSize: "xs", fontWeight: "semibold", color: "#676F88", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {title}
      </Box>
      {items.map((item) =>
        item.url ? (
          <Link
            key={item.name}
            href={item.url}
            className={css({ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } })}
          >
            {item.name}
          </Link>
        ) : (
          <Box key={item.name} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } }}>
            {item.name}
          </Box>
        )
      )}
    </VStack>
  );
}

function DarkHighlightCard({ imgUrl, label, description, linkText, link }: { imgUrl: string; label: string; description: string; linkText: string; link: string }) {
  return (
    <Link href={link} className={css({ width: "full" })}>
      <Box css={{ background: "#22263C", borderRadius: "10px", p: "4", overflow: "hidden", position: "relative", flex: "1", h: "188px", display: "flex", gap: "4", alignItems: "center" }}>
        <Box css={{ position: "absolute", inset: "0" }}>
          <Image src={imgUrl} alt="" fill className={css({ objectFit: "cover" })} />
        </Box>
        <Box css={{ position: "relative", zIndex: "1", display: "flex", flexDirection: "column", h: "156px", w: "187px", alignItems: "flex-start", justifyContent: "space-between", flexShrink: "0" }}>
          <VStack css={{ gap: "2.5", alignItems: "flex-start", w: "full" }}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#9EA2BD" }}>{label}</Box>
            <Box css={{ fontSize: "md", color: "#FFFFFF" }}>{description}</Box>
          </VStack>
          <Flex css={{ gap: "1.5", alignItems: "center", cursor: "pointer", color: "#FFFFFF" }}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>{linkText}</Box>
            <ChevronRight />
          </Flex>
        </Box>
      </Box>
    </Link>
  );
}

export function SubmenuPlatform() {
  return (
    <Box
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      css={{ background: "rgba(20, 24, 47, 0.95)", border: "1px solid #29304B", borderRadius: "20px", p: "5", display: "flex", flexDirection: "column", gap: "10" }}
    >
      <HStack css={{ gap: "10", alignItems: "flex-start" }}>
        <NavColumn
          title="What We Solve"
          items={[
            { name: "Agentic Delivery Acceleration", url: "https://treblle.com/agentic-delivery-acceleration" },
            { name: "Sprawl Management", url: "https://treblle.com/sprawl-managment" },
            { name: "Operational Blindness", url: "https://treblle.com/operational-blindness" },
            { name: "Security and Compliance", url: "https://treblle.com/security-compliance" },
          ]}
        />
        <NavColumn
          title="Who Is It For"
          items={[
            { name: "Enterprise Architects", url: "https://treblle.com/enterprise-architects" },
            { name: "Platform Engineering", url: "https://treblle.com/platform-engineering" },
            { name: "InfoSec Teams", url: "https://treblle.com/infosec-teams" },
            { name: "Product Innovators", url: "https://treblle.com/product-innovators" },
            { name: "Engineering Leadership", url: "https://treblle.com/engineering-leadership" },
          ]}
        />
        <NavColumn
          title="Technology"
          items={[
            { name: "Integrations", url: "/integrate-treblle/treblle-integrations" },
            { name: "Documentation", url: "/" },
            { name: "Deployment Options", url: "https://treblle.com/deployment-options" },
            { name: "Release Notes", url: "https://treblle.com/release-notes" },
          ]}
        />
      </HStack>
      <HStack css={{ gap: "5", w: "full" }}>
        <DarkHighlightCard
          imgUrl={integrationsCardBg}
          label="Integrations"
          description="Works with the gateway you already run."
          linkText="View Integrations"
          link="/integrate-treblle/treblle-integrations"
        />
        <DarkHighlightCard
          imgUrl={releaseNotesCardBg}
          label="Release Notes"
          description="Documentation editor and a dual-layer governance system."
          linkText="Read More"
          link="https://treblle.com/release-notes"
        />
      </HStack>
    </Box>
  );
}
