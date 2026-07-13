import { Box, Flex, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import { NavLink as Link } from "../nav-link";
import type { FeaturedStory } from "~sanity/nav-queries";

const navItems = [
  { title: "Overview", link: "https://treblle.com/overview" },
  { title: "How It Works", link: "https://treblle.com/how-it-works" },
  { title: "Customer Stories", link: "https://treblle.com/customer-stories" },
  { title: "ROI Calculator", link: "https://treblle.com/roi-calculator" },
];

function ArrowRight() {
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

export function SubmenuWhyTreblle({
  featuredStory,
}: {
  featuredStory?: FeaturedStory | null | undefined;
}) {
  return (
    <Box
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      css={{
        background: "[rgba(20,24,47,0.95)]",
        border: "1px solid",
        borderColor: "[#29304B]",
        borderRadius: "20px",
        p: "5",
        display: "flex",
        alignItems: "flex-start",
        gap: "[162px]",
      }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={css({
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "1.5",
              _hover: { color: "[#5192FF]" },
            })}
          >
            {item.title}
            <ArrowRight />
          </Link>
        ))}
      </VStack>

      {featuredStory && (
        <Link
          href={`https://treblle.com/customer-stories/${featuredStory.id}`}
          className={css({ flexShrink: "0", w: "[219px]" })}
        >
          <Box
            css={{
              background: "[#22263C]",
              border: "1px solid",
              borderColor: "[#29304B]",
              borderRadius: "10px",
              p: "4",
              display: "flex",
              flexDirection: "column",
              gap: "6",
              _hover: { opacity: "0.85" },
              transition: "opacity 0.15s",
            }}
          >
            <VStack css={{ gap: "2.5", alignItems: "flex-start", w: "full" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", color: "[#9EA2BD]" }}>
                Customer Story
              </Box>
              <Box css={{ fontSize: "md", color: "white" }}>
                {featuredStory.title}
              </Box>
            </VStack>
            <Flex
              css={{
                gap: "1.5",
                alignItems: "center",
                color: "white",
                _hover: { color: "[#5192FF]" },
                transition: "color 0.15s",
              }}
            >
              <Box
                css={{
                  fontSize: "sm",
                  fontWeight: "medium",
                  whiteSpace: "nowrap",
                }}
              >
                Read Story
              </Box>
              <ArrowRight />
            </Flex>
          </Box>
        </Link>
      )}
    </Box>
  );
}
