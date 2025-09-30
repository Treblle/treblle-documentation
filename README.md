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

The documentation supports React components within MDX:

```mdx
<CustomBox>Your highlighted content here</CustomBox>
```

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

### Reporting Issues

- Use GitHub Issues for bug reports and feature requests
- Include steps to reproduce for bugs
- Provide context for feature requests

## 📞 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/Treblle/treblle-documentation/issues)
- **Product Support**: [support@treblle.com](mailto:support@treblle.com)
- **Community**: [Discord](https://treblle.com/chat)
- **Website**: [treblle.com](https://treblle.com)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- **Main Website**: [treblle.com](https://treblle.com)
- **Live Documentation**: [docs.treblle.com](https://docs.treblle.com)
- **GitHub Organization**: [github.com/Treblle](https://github.com/Treblle)
- **API Knowledge Base**: [treblle.com/knowledgebase](https://treblle.com/knowledgebase)

---

<div align="center">
  <strong>Built with ❤️ by the Treblle Team</strong>
</div>
