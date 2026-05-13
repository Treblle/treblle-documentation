import Link from "next/link";
import { Box, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";

const items = [{ label: "About Us", href: "https://treblle.com/about-us" }];

export function SubmenuCompany() {
  return (
    <Box
      style={{ backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }}
      css={{ background: "rgba(20, 24, 47, 0.95)", border: "1px solid #29304B", borderRadius: "20px", minWidth: "[300px]", p: "5", display: "inline-flex" }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start", width: "full" }}>
        {items.map((item) => (
          <Link href={item.href} key={item.label} className={css({ width: "full" })}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } }}>
              {item.label}
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
