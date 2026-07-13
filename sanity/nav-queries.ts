import { sanityClient } from "./client";

export type FeaturedStory = { id: string; title: string };
export type LatestBlogPost = { slug: string; title: string };

// Most recently published customer story. customerStory has no publish-date
// field, so we use Sanity's built-in _createdAt as the recency signal.
const featuredStoryQuery = `
  *[_type == "customerStory" && status == "published"] | order(_createdAt desc)[0] {
    "id": slug.current,
    title
  }
`;

const latestBlogPostQuery = `
  *[_type == "blogPost"] | order(publishedAt desc)[0] {
    "slug": slug.current,
    title
  }
`;

export async function getFeaturedStory(): Promise<FeaturedStory | null> {
  try {
    return await sanityClient.fetch<FeaturedStory | null>(
      featuredStoryQuery,
      {},
      { next: { tags: ["customerStory"] } },
    );
  } catch {
    return null;
  }
}

export async function getLatestBlogPost(): Promise<LatestBlogPost | null> {
  try {
    return await sanityClient.fetch<LatestBlogPost | null>(
      latestBlogPostQuery,
      {},
      { next: { tags: ["blogPost"] } },
    );
  } catch {
    return null;
  }
}
