import { NavLink as Link } from "../nav-link";
import { Box, Flex, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import type { LatestBlogPost } from "~sanity/nav-queries";

const navItems = [
  { label: "Blog", href: "https://treblle.com/blog" },
  { label: "eBooks", href: "https://treblle.com/ebooks" },
  { label: "Events", href: "https://treblle.com/events" },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SubmenuResourcesMobile({ post }: { post?: LatestBlogPost | null | undefined }) {
  return (
    <VStack css={{ gap: "10", alignItems: "flex-start", w: "full" }}>
      <VStack css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
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
        ))}
      </VStack>

      {post && (
        <Link href={`https://treblle.com/blog/${post.slug}`} style={{ display: "contents" }}>
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
              cursor: "pointer",
              _hover: { opacity: "0.85" },
              transition: "opacity 0.15s",
            }}
          >
            <VStack css={{ gap: "2.5", alignItems: "flex-start" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", color: "[#9EA2BD]" }}>
                Featured Blog Post
              </Box>
              <Box css={{ fontSize: "sm", color: "white", lineHeight: "[20px]" }}>
                {post.title}
              </Box>
            </VStack>

            <Flex css={{ gap: "1.5", alignItems: "center", color: "white" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>
                Read Post
              </Box>
              <ChevronRight />
            </Flex>
          </Box>
        </Link>
      )}
    </VStack>
  );
}
