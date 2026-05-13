import Image from "next/image";
import { Box, Flex, VStack } from "~styled-system/jsx";
import Link from "next/link";

const navItems = [
  { title: "How It Works", link: "https://treblle.com/how-it-works" },
  { title: "Customer Stories", link: "https://treblle.com/customer-stories" },
  { title: "ROI Calculator", link: "https://treblle.com/roi-calculator" },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SubmenuWhyTreblleMobile() {
  return (
    <VStack css={{ gap: "10", alignItems: "flex-start", w: "full" }}>
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {navItems.map((item) => (
          <Box key={item.title} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } }}>
            <Link href={item.link}>{item.title}</Link>
          </Box>
        ))}
      </VStack>

      <Box css={{ background: "#22263C", borderRadius: "12px", overflow: "hidden", w: "full", display: "flex", flexDirection: { base: "column", md: "row" }, minH: { base: "auto", md: "[140px]" } }}>
        <Flex css={{ flex: "1", flexDirection: "column", justifyContent: "space-between", p: "4", gap: "3" }}>
          <VStack css={{ gap: "2", alignItems: "flex-start" }}>
            <Box css={{ fontSize: "xs", fontWeight: "medium", color: "#9EA2BD" }}>Customer Story</Box>
            <Box css={{ fontSize: "sm", color: "#FFFFFF", lineHeight: "1.4" }}>How leading enterprises use Treblle to gain full API visibility</Box>
          </VStack>
          <Link href="https://treblle.com/customer-stories">
            <Flex css={{ gap: "1.5", alignItems: "center", cursor: "pointer", color: "#FFFFFF" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium" }}>Read Stories</Box>
              <ChevronRight />
            </Flex>
          </Link>
        </Flex>
        <Box css={{ px: "4", pb: "4" }}>
          <Box css={{ position: "relative", w: { base: "full", md: "[200px]" }, h: { base: "[140px]", md: "auto" }, flexShrink: "0", borderRadius: "8px" }}>
            <Image src="/navigation/why-treblle-customer-story.png" alt="Customer Story" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </Box>
        </Box>
      </Box>
    </VStack>
  );
}
