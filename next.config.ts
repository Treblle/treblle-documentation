import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
      mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'nord',
        light: 'nord',
      }
    }
  }
    // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
    feedback: false,
    // ... Add regular Next.js options here
});
