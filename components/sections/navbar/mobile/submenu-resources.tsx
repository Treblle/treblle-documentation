import Link from "next/link";
import { Box, Flex, VStack } from "~styled-system/jsx";

export type LatestBlogPost = { slug: string; title: string; heroImage: string | null };

const navItems = [
  { label: "Blog", href: "https://treblle.com/blog" },
  { label: "Documentation", href: "/" },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SubmenuResourcesMobile({ post }: { post?: LatestBlogPost | null | undefined }) {
  return (
    <VStack css={{ gap: "10", alignItems: "flex-start", w: "full" }}>
      <VStack css={{ gap: "[22px]", alignItems: "flex-start", w: "full" }}>
        {navItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", _hover: { color: "#5192FF" } }}>
              {item.label}
            </Box>
          </Link>
        ))}
      </VStack>

      {post && (
        <Link href={`https://treblle.com/blog/${post.slug}`} style={{ display: "contents" }}>
          <Box
            css={{
              background: "#22263C",
              borderRadius: "10px",
              p: "4",
              w: "full",
              display: "flex",
              flexDirection: "column",
              gap: "3",
              cursor: "pointer",
            }}
          >
            <VStack css={{ gap: "2.5", alignItems: "flex-start" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#9EA2BD" }}>From Our Blog</Box>
              <Box css={{ fontSize: "sm", color: "#FFFFFF", lineHeight: "[20px]" }}>{post.title}</Box>
            </VStack>
            <Flex css={{ gap: "1.5", alignItems: "center", color: "#FFFFFF" }}>
              <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>Read Post</Box>
              <ChevronRight />
            </Flex>
          </Box>
        </Link>
      )}
    </VStack>
  );
}
