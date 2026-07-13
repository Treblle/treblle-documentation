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
  { label: "About Us", href: "https://treblle.com/about-us" },
  { label: "Careers", href: "https://treblle.com/careers" },
  { label: "News", href: "https://treblle.com/news" },
];

export function SubmenuCompany() {
  return (
    <Box
      style={{
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
      }}
      css={{
        background: "[rgba(20,24,47,0.95)]",
        border: "1px solid",
        borderColor: "[#29304B]",
        borderRadius: "20px",
        minWidth: "[300px]",
        p: "5",
        display: "inline-flex",
      }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start", width: "full" }}>
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={css({
              width: "full",
              display: "flex",
              alignItems: "center",
              gap: "1.5",
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              cursor: "pointer",
              whiteSpace: "nowrap",
              _hover: { color: "[#5192FF]" },
            })}
          >
            {item.label}
            <ChevronRight />
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
