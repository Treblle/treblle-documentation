import { createClient } from "@sanity/client";

// Same Treblle Sanity project as the main website; published content is
// publicly readable, so no token is required for these nav queries.
export const sanityClient = createClient({
    projectId: process.env["NEXT_PUBLIC_SANITY_PROJECT_ID"] ?? "y0t5b9p5",
    dataset: process.env["NEXT_PUBLIC_SANITY_DATASET"] ?? "production",
    apiVersion: "2024-01-01",
    useCdn: true,
    perspective: "published",
});
