import Image from "next/image";
import { Box, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
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

export function SubmenuWhyTreblle() {
  return (
    <Box
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      css={{ background: "rgba(20, 24, 47, 0.95)", border: "1px solid #29304B", borderRadius: "20px", p: "5", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10" }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={css({ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", whiteSpace: "nowrap", _hover: { color: "#5192FF" } })}
          >
            {item.title}
          </Link>
        ))}
      </VStack>

      <Box css={{ background: "#22263C", borderRadius: "10px", p: "4", overflow: "hidden", position: "relative", w: "415px", flexShrink: "0", display: "flex", gap: "4", alignItems: "center" }}>
        <Box css={{ display: "flex", flexDirection: "column", h: "156px", w: "187px", alignItems: "flex-start", justifyContent: "space-between", flexShrink: "0" }}>
          <VStack css={{ gap: "2.5", alignItems: "flex-start", w: "full" }}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#9EA2BD" }}>Customer Story</Box>
            <Box css={{ fontSize: "md", color: "#FFFFFF" }}>How leading enterprises use Treblle to gain full API visibility</Box>
          </VStack>
          <Link
            href="https://treblle.com/customer-stories"
            className={css({ display: "flex", gap: "1.5", alignItems: "center", cursor: "pointer", color: "#FFFFFF" })}
          >
            <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>Read Stories</Box>
            <ChevronRight />
          </Link>
        </Box>
        <Box css={{ flex: "[1 0 0]", h: "[167px]", minW: "0", overflow: "hidden", position: "relative", borderRadius: "8px" }}>
          <Image src="/navigation/why-treblle-customer-story.png" alt="Customer Story" fill style={{ objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
}
