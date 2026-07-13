import { NavLink as Link } from "../nav-link";
import { Box, Flex, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


const sections: { title: string; items: { name: string; url?: string }[] }[] = [
  {
    title: "What We Solve",
    items: [
      {
        name: "Agentic Delivery Acceleration",
        url: "https://treblle.com/agentic-delivery-acceleration",
      },
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
      { name: "Release Notes", url: "https://treblle.com/news?tab=release-notes" },
    ],
  },
  {
    title: "Trust & Compliance",
    items: [
      // { name: "AI Risk Controls" },
      // { name: "Compliance" },
      { name: "Deployment", url: "https://treblle.com/deployment-options" },
      { name: "Trust Center", url: "https://trust.treblle.com/" },
    ],
  },
];

function MobileHighlightCard({
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
          w: "full",
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
          <Box css={{ fontSize: "md", color: "white", lineHeight: "1.35" }}>
            {description}
          </Box>
        </VStack>
        <Flex css={{ gap: "1.5", alignItems: "center", color: "white" }}>
          <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>
            {linkText}
          </Box>
          <ArrowRight />
        </Flex>
      </Box>
    </Link>
  );
}

export function SubmenuPlatformMobile() {
  return (
    <VStack css={{ gap: "10", alignItems: "flex-start", w: "full" }}>
      {sections.map((section) => (
        <VStack
          key={section.title}
          css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}
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
            {section.title}
          </Box>
          {section.items.map((item) =>
            item?.url ? (
              <Link
                key={item.name}
                href={item?.url}
                className={css({
                  fontSize: "sm",
                  fontWeight: "medium",
                  color: "white",
                  cursor: "pointer",
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
                  _hover: { color: "[#5192FF]" },
                }}
              >
                {item.name}
              </Box>
            ),
          )}
        </VStack>
      ))}

      <VStack css={{ gap: "5", w: "full" }}>
        <MobileHighlightCard
          label="Integrations"
          description="Works with the gateway you already run."
          linkText="View Integrations"
          link="/integrate-treblle/treblle-integrations"
        />
        <MobileHighlightCard
          label="Release Notes"
          description="Documentation editor and a dual-layer governance system."
          linkText="Read More"
          link="https://treblle.com/news?tab=release-notes"
        />
      </VStack>
    </VStack>
  );
}
