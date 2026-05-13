import Link from "next/link";
import { Box, VStack } from "~styled-system/jsx";

const items = [
  { label: "Deployment", href: "https://treblle.com/deployment-options" },
  { label: "Trust Center", href: "https://trust.treblle.com/" },
];

export function SubmenuTrustMobile() {
  return (
    <VStack css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
      {items.map((item) => (
        <Box key={item.label} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", _hover: { color: "#5192FF" } }}>
          <Link href={item.href}>{item.label}</Link>
        </Box>
      ))}
    </VStack>
  );
}
