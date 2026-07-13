import { NavLink as Link } from "../nav-link";
import { Box, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";

function ChevronRight() {
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

const items = [
  { label: "About Us", href: "https://treblle.com/about-us", link: "https://treblle.com/about-us" },
  { label: "Careers", href: "https://treblle.com/careers" },
  { label: "News", href: "https://treblle.com/news" },
];

export function SubmenuCompanyMobile() {
  return (
    <VStack css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.label}
            href={item.href}
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
            {item.label}
            <ChevronRight />
          </Link>
        ) : (
          <Box
            key={item.label}
            css={{
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              cursor: "pointer",
              _hover: { color: "[#5192FF]" },
            }}
          >
            {item.label}
          </Box>
        ),
      )}
    </VStack>
  );
}
