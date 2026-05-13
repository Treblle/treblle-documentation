import Link from "next/link";
import { Box, VStack } from "~styled-system/jsx";

const items = [{ label: "About Us", href: "https://treblle.com/about-us" }];

export function SubmenuCompanyMobile() {
  return (
    <VStack css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
      {items.map((item) => (
        <Link key={item.label} href={item.href}>
          <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", _hover: { color: "#5192FF" } }}>
            {item.label}
          </Box>
        </Link>
      ))}
    </VStack>
  );
}
