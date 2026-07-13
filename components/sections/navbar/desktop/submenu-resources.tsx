import { NavLink as Link } from "../nav-link";
import { Box, Flex, VStack } from "~styled-system/jsx";
import { css } from "~styled-system/css";
import type { LatestBlogPost } from "~sanity/nav-queries";

const navItems = [
  { label: "Blog", href: "https://treblle.com/blog" },
  { label: "eBooks", href: "https://treblle.com/ebooks" },
  { label: "Events", href: "https://treblle.com/events" },
];

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SubmenuResources({ post }: { post?: LatestBlogPost | null | undefined }) {
  return (
    <Box
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      css={{
        background: "[rgba(20,24,47,0.95)]",
        border: "1px solid",
        borderColor: "[#29304B]",
        borderRadius: "20px",
        p: "5",
        display: "flex",
        alignItems: "flex-start",
        gap: "[182px]",
      }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={css({
              fontSize: "sm",
              fontWeight: "medium",
              color: "white",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "1.5",
              _hover: { color: "[#5192FF]" },
            })}
          >
            {item.label}
            <ArrowRight />
          </Link>
        ))}
      </VStack>

      {post && (
        <Link
          href={`https://treblle.com/blog/${post.slug}`}
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
              cursor: "pointer",
              _hover: { opacity: "0.85" },
              transition: "opacity 0.15s",
            }}
          >
            <VStack css={{ gap: "2.5", alignItems: "flex-start", w: "full" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", color: "[#9EA2BD]" }}>
                Featured Blog Post
              </Box>
              <Box css={{ fontSize: "md", color: "white" }}>{post.title}</Box>
            </VStack>
            <Flex css={{ gap: "1.5", alignItems: "center", color: "white", _hover: { color: "[#5192FF]" }, transition: "color 0.15s" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>
                Read Post
              </Box>
              <ArrowRight />
            </Flex>
          </Box>
        </Link>
      )}
    </Box>
  );
}
