import Link from "next/link";
import { Box, VStack } from "~styled-system/jsx";

const items = [
  { label: "Deployment", href: "https://treblle.com/deployment-options" },
  { label: "Trust Center", href: "https://trust.treblle.com/" },
];

export function SubmenuTrust() {
  return (
    <Box
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      css={{ background: "rgba(20, 24, 47, 0.95)", minWidth: "[300px]", border: "1px solid #29304B", borderRadius: "20px", p: "5", display: "inline-flex" }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {items.map((item) => (
          <Box key={item.label} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } }}>
            <Link href={item.href}>{item.label}</Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
