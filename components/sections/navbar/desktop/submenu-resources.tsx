import Link from "next/link";
import Image from "next/image";
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

export function SubmenuResources({ post }: { post?: LatestBlogPost | null | undefined }) {
  return (
    <Box
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      css={{ background: "rgba(20, 24, 47, 0.95)", border: "1px solid #29304B", borderRadius: "20px", p: "5", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10" }}
    >
      <VStack css={{ gap: "22px", alignItems: "flex-start" }}>
        {navItems.map((item) => (
          <Box key={item.label} css={{ fontSize: "sm", fontWeight: "medium", color: "#FFFFFF", cursor: "pointer", whiteSpace: "nowrap", _hover: { color: "#5192FF" } }}>
            <Link href={item.href}>{item.label}</Link>
          </Box>
        ))}
      </VStack>

      {post && (
        <Link href={`https://treblle.com/blog/${post.slug}`} style={{ display: "contents" }}>
          <Box
            css={{
              background: "#22263C",
              borderRadius: "10px",
              p: "4",
              overflow: "hidden",
              position: "relative",
              w: "[415px]",
              flexShrink: "0",
              display: "flex",
              gap: "4",
              alignItems: "center",
              cursor: "pointer",
              _hover: { opacity: "0.9" },
              transition: "opacity 0.15s",
            }}
          >
            <Box css={{ display: "flex", flexDirection: "column", h: "[156px]", w: "[187px]", alignItems: "flex-start", justifyContent: "space-between", flexShrink: "0" }}>
              <VStack css={{ gap: "2.5", alignItems: "flex-start", w: "full" }}>
                <Box css={{ fontSize: "sm", fontWeight: "medium", color: "#9EA2BD" }}>From Our Blog</Box>
                <Box css={{ fontSize: "md", color: "#FFFFFF" }}>{post.title}</Box>
              </VStack>
              <Flex css={{ gap: "1.5", alignItems: "center", cursor: "pointer", color: "#FFFFFF" }}>
                <Box css={{ fontSize: "sm", fontWeight: "medium", whiteSpace: "nowrap" }}>Read Post</Box>
                <ChevronRight />
              </Flex>
            </Box>
            {post.heroImage && (
              <Box css={{ flex: "[1 0 0]", h: "[167px]", minW: "0", overflow: "hidden", position: "relative", borderRadius: "8px" }}>
                <Image src={post.heroImage} alt={post.title} fill style={{ objectFit: "cover", objectPosition: "right center" }} />
              </Box>
            )}
          </Box>
        </Link>
      )}
    </Box>
  );
}
