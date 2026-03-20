# Treblle Documentation

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![Nextra](https://img.shields.io/badge/Nextra-4.5.1-blue)](https://nextra.site/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![PandaCSS](https://img.shields.io/badge/PandaCSS-1.4.1-orange)](https://panda-css.com/)

The official documentation website for [Treblle](https://treblle.com), the API Intelligence Platform that helps engineering and product teams build, ship, and understand their REST APIs in one place.

## 🚀 About Treblle

Treblle is your comprehensive API Intelligence Platform, empowering you to build, manage, and truly understand APIs confidently. Whether you're a solo developer with a few APIs, a fast-growing startup, or an enterprise with thousands of APIs, Treblle gives you complete visibility, intelligence, and control across your entire API estate.

### Key Features

- **Real-time API Monitoring** - Monitor API performance, errors, and usage patterns
- **Comprehensive Analytics** - Gain insights into API consumption and performance metrics
- **Multi-language SDKs** - Support for Node.js, PHP, Python, Java, Go, .NET, and Ruby
- **API Gateway Integrations** - Works with AWS API Gateway, Azure, Kong, and more
- **Security & Governance** - Built-in security monitoring and compliance features

## 🛠 Tech Stack

This documentation site is built with modern web technologies:

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[Nextra](https://nextra.site/)** - Static site generator for documentation
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[PandaCSS](https://panda-css.com/)** - CSS-in-JS styling system
- **[Pagefind](https://pagefind.app/)** - Static search functionality

## 📋 Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm/yarn

## 🚀 Quick Start

1. **Clone the repository**

    ```bash
    git clone https://github.com/Treblle/treblle-documentation.git
    cd treblle-documentation
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Generate PandaCSS styles**

    ```bash
    pnpm prepare
    ```

4. **Start the development server**

    ```bash
    pnpm dev
    ```

5. **Open your browser**

    Visit [http://localhost:3000](http://localhost:3000) to see the documentation site.

## 📚 Project Structure

```
treblle-documentation/
├── app/                    # Next.js 13+ app directory
│   ├── docs/              # Documentation pages
│   ├── layout.tsx         # Root layout component
│   └── page.mdx          # Homepage content
├── components/            # Reusable React components
├── public/               # Static assets
│   └── _pagefind/        # Generated search index
├── styled-system/        # Generated PandaCSS files
├── styles/               # Custom styles and fonts
├── theme/                # PandaCSS theme configuration
├── next.config.ts        # Next.js configuration
├── panda.config.ts       # PandaCSS configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

| Script              | Description              |
| ------------------- | ------------------------ |
| `pnpm dev`          | Start development server |
| `pnpm build`        | Build for production     |
| `pnpm start`        | Start production server  |
| `pnpm lint`         | Run ESLint               |
| `pnpm typecheck`    | Run TypeScript compiler  |
| `pnpm format:check` | Check code formatting    |
| `pnpm format:fix`   | Fix code formatting      |
| `pnpm prepare`      | Generate PandaCSS styles |

## 📝 Writing Documentation

### Adding New Pages

1. Create MDX files in the `app/docs/` directory
2. Add frontmatter with title and description:

    ```mdx
    ---
    title: "Your Page Title"
    description: "Page description for SEO"
    ---

    # Your Content Here
    ```

### Using Components

The documentation supports React components within MDX. All components listed below can be used directly in any `.mdx` page file. You do **not** need to import them — they are available globally.

---

## 🧩 Component Reference for Content Authors

This section is for the **marketing and content team**. Below is a complete guide to every component you can use when writing documentation pages.

---

### Alert / Callout Cards

Use these to draw attention to important information inline in your content.

#### `<NoteCard>`
A blue info box. Use for helpful context or extra detail.
```mdx
<NoteCard>
    Treblle automatically masks sensitive fields like passwords and tokens before they leave your server.
</NoteCard>
```

#### `<TipCard>`
A green box. Use for best-practice tips or shortcuts.
```mdx
<TipCard>
    Randomly select an endpoint for each request to get a more accurate performance benchmark.
</TipCard>
```

#### `<CautionCard>`
A red/orange warning box. Use for important warnings or destructive actions.
```mdx
<CautionCard>
    Deleting an API project is permanent and cannot be undone.
</CautionCard>
```

---

### Images

#### `<ImageCard>`
Use this instead of plain Markdown images. Renders with rounded corners and proper spacing.

| Prop | Required | Description |
|------|----------|-------------|
| `src` | Yes | Path to image (e.g. `/platform/requests/listview.png`) |
| `alt` | Yes | Descriptive text for accessibility |

```mdx
<ImageCard src="/platform/requests/listview.png" alt="List View of Requests" />
```

---

### Videos

#### `<YoutubeEmbed>`
Embeds a YouTube video in a responsive 16:9 player.

| Prop | Required | Description |
|------|----------|-------------|
| `postId` | Yes | The YouTube video ID (the part after `?v=` in the URL) |

```mdx
<YoutubeEmbed postId="dQw4w9WgXcQ" />
```

---

### Info Tables

#### `<InfoTable>`
A two-column table — left column for the term/title (30%), right for the description (70%).

| Prop | Required | Description |
|------|----------|-------------|
| `title` | No | Header for the left column |
| `description` | No | Header for the right column |

```mdx
<InfoTable title="Field" description="What it means">
    <InfoTable.Row title="HTTP Method" description="The type of request: GET, POST, PUT, DELETE" />
    <InfoTable.Row title="Response Code" description="The status code returned (e.g. 200, 404)" />
    <InfoTable.Row title="Load Time" description="How long the request took in milliseconds" />
</InfoTable>
```

---

### Checklists

#### `<Checklist>`
An interactive checklist users can tick off. Great for setup guides or verification steps.

Each `<Checklist.item>` needs a unique `id`.

```mdx
<Checklist>
    <Checklist.item id="install">Install the Treblle SDK</Checklist.item>
    <Checklist.item id="key">Add your API key to the config</Checklist.item>
    <Checklist.item id="test">Send a test request</Checklist.item>
</Checklist>
```

---

### FAQ Sections

#### `<FAQ>` + `<FAQItem>`
Expandable question-and-answer sections. Each `FAQItem` shows the answer when clicked.

```mdx
<FAQ>
    <FAQItem question="Does Treblle slow down my API?">
        No. Treblle operates asynchronously and has zero impact on API response times.
    </FAQItem>
    <FAQItem question="Which frameworks are supported?">
        Treblle supports Node.js, PHP, Python, Java, Go, .NET, Ruby, and more.
    </FAQItem>
</FAQ>
```

---

### Integration Cards

#### `<IntegrationCards>`
A responsive card grid for listing integrations, SDKs, or related links.

```mdx
<IntegrationCards>
    <IntegrationCards.Card
        title="Node.js SDK"
        link="/integrate-treblle/integrations/node"
        linkTitle="View Docs"
    >
        Add Treblle to your Express or Fastify app in minutes.
    </IntegrationCards.Card>
    <IntegrationCards.Card
        title="Laravel SDK"
        link="/integrate-treblle/integrations/laravel"
        linkTitle="View Docs"
    >
        Native Laravel middleware for automatic API logging.
    </IntegrationCards.Card>
</IntegrationCards>
```

| Prop | Required | Description |
|------|----------|-------------|
| `title` | No | Card heading |
| `link` | No | URL to link to |
| `linkTitle` | No | Text label for the link |
| `children` | No | Short description inside the card |

---

### Pagination (Previous / Next)

#### `<PaginationCards>`
Adds automatic previous/next page navigation at the bottom of a page. No props needed — it reads the page structure automatically.

Place this at the very end of any page:
```mdx
<PaginationCards />
```

---

### Page Frontmatter

Every page must start with a frontmatter block (between `---` lines). This controls the page title, browser tab title, and SEO description.

```mdx
---
title: "Your Page Title"
metaTitle: "Your Page Title - Treblle Documentation"
description: "A short 1-2 sentence description for search engines."
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Shown as the H1 heading on the page |
| `metaTitle` | Yes | Shown in the browser tab and search results |
| `description` | Yes | Used by search engines (keep under 160 characters) |

---

### Styling with PandaCSS

Use PandaCSS utilities for styling:

```tsx
import { css } from "~styled-system/css";

const styles = css({
    backgroundColor: "blue.50",
    padding: "4",
    borderRadius: "lg",
});
```

## 🔍 Search Functionality

The site includes static search powered by Pagefind. The search index is automatically generated during the build process and included in the `public/_pagefind/` directory.

## 🎨 Theming & Styling

The site uses PandaCSS for styling with a custom theme configuration:

- **Colors**: Defined in `theme/colors.ts`
- **Typography**: Configured in `theme/text-styles.ts`
- **Tokens**: Design tokens in `theme/tokens.ts`
- **Fonts**: Google Fonts integration in `styles/fonts.ts`

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main

### Manual Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

We welcome contributions to improve the Treblle documentation!

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test locally: `pnpm dev`
5. Submit a pull request

### Guidelines

- Follow the existing code style (ESLint + Prettier configured)
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed