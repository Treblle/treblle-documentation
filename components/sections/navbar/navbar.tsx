import { Box } from "~styled-system/jsx";
import { Navbar as DesktopNavbar } from "./desktop/navbar";
import { MobileNavbar } from "./mobile/navbar-mobile";
import type { FeaturedStory, LatestBlogPost } from "~sanity/nav-queries";

export function Navbar({
  featuredStory,
  resourcesBlogPost,
}: {
  featuredStory?: FeaturedStory | null | undefined;
  resourcesBlogPost?: LatestBlogPost | null | undefined;
}) {
  return (
    <Box
      css={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2000,
      }}
    >
      <Box css={{ maxWidth: "1400px", margin: "auto", px: "6", py: "3" }}>
        {/* Desktop nav — hidden below lg */}
        <Box css={{ display: { base: "none", lg: "block" } }}>
          <DesktopNavbar
            featuredStory={featuredStory}
            resourcesBlogPost={resourcesBlogPost}
          />
        </Box>
        {/* Mobile nav — hidden at lg+ */}
        <Box css={{ display: { base: "block", lg: "none" } }}>
          <MobileNavbar
            featuredStory={featuredStory}
            resourcesBlogPost={resourcesBlogPost}
          />
        </Box>
      </Box>
    </Box>
  );
}
