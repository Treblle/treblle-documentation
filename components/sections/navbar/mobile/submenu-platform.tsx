import Image from "next/image";
import { Box, Flex, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import Link from "next/link";

const integrationsCardBg = "/navigation/platform-integrations-mobile.png";
const releaseNotesCardBg = "/navigation/platform-release-notes-mobile.png";

const sections: { title: string; items: { name: string; url?: string }[] }[] = [
  {
    title: "What We Solve",
    items: [
      { name: "Agentic Delivery Acceleration", url: "https://treblle.com/agentic-delivery-acceleration" },
      { name: "Sprawl Management", url: "https://treblle.com/sprawl-managment" },
      { name: "Operational Blindness", url: "https://treblle.com/operational-blindness" },
      { name: "Security and Compliance", url: "https://treblle.com/security-compliance" },
    ],
  },
  {
    title: "Who Is It For",
    items: [
      { name: "Enterprise Architects", url: "https://treblle.com/enterprise-architects" },
      { name: "Platform Engineering", url: "https://treblle.com/platform-engineering" },
      { name: "InfoSec Teams", url: "https://treblle.com/infosec-teams" },
      { name: "Product Innovators", url: "https://treblle.com/product-innovators" },
      { name: "Engineering Leadership", url: "https://treblle.com/engineering-leadership" },
    ],
  },
  {
    title: "Technology",
    items: [
      { name: "Integrations", url: "/integrate-treblle/treblle-integrations" },
      { name: "Documentation", url: "/" },
      { name: "Deployment Options", url: "https://treblle.com/deployment-options" },
      { name: "Release Notes", url: "https://treblle.com/release-notes" },
    ],
  },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileHighlightCard({ imgUrl, label, description, linkText, link }: { imgUrl: string; label: string; description: string; linkText: string; link: string }) {
  return (
    <Link href={link} className={css({ width: "full" })}>
      <Box css={{ background: "#0A0E1A", borderRadius: "10px", overflow: "hidden", position: "relative", w: "full", h: "[200px]" }}>
        <Image src={imgUrl} alt="" fill style={{ objectFit: "cover", objectPosition: "right center" }} />
        <Flex css={{ position: "absolute", inset: "0", zIndex: "1", flexDirection: "column", justifyContent: "space-between", p: "4" }}>
          <VStack css={{ gap: "[10px]", alignItems: "flex-start", maxW: "60%" }}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#9EA2BD" }}>{label}</Box>
            <Box css={{ fontSize: "md", color: "#FFFFFF", lineHeight: "1.35" }}>{description}</Box>
          </VStack>
          <Flex css={{ gap: "1.5", alignItems: "center", cursor: "pointer", color: "#FFFFFF" }}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>{linkText}</Box>
            <ChevronRight />
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
}

export function SubmenuPlatformMobile() {
  return (
    <VStack css={{ gap: "10", alignItems: "flex-start", w: "full" }}>
      {sections.map((section) => (
        <VStack key={section.title} css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
          <Box css={{ fontSize: "xs", fontWeight: "semibold", color: "#676F88", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {section.title}
          </Box>
          {section.items.map((item) =>
            item?.url ? (
              <Link
                key={item.name}
                href={item.url}
                className={css({ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", _hover: { color: "#5192FF" } })}
              >
                {item.name}
              </Link>
            ) : (
              <Box key={item.name} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", _hover: { color: "#5192FF" } }}>
                {item.name}
              </Box>
            )
          )}
        </VStack>
      ))}
      <VStack css={{ gap: "5", w: "full" }}>
        <MobileHighlightCard
          imgUrl={integrationsCardBg}
          label="Integrations"
          description="Works with the gateway you already run."
          linkText="View Integrations"
          link="/integrate-treblle/treblle-integrations"
        />
        <MobileHighlightCard
          imgUrl={releaseNotesCardBg}
          label="Release Notes"
          description="Documentation editor and a dual-layer governance system."
          linkText="Read More"
          link="https://treblle.com/release-notes"
        />
      </VStack>
    </VStack>
  );
}
