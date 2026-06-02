export type FooterLink = {
    title: string;
    url: string;
    newPage?: boolean | undefined;
};

export type FooterLinkGroup = {
    title: string;
    links: Array<FooterLink>;
};

const productLinks: Array<FooterLink> = [
    {
        title: "Overview",
        url: "https://treblle.com/",
    },
    {
        title: "How It Works",
        url: "https://treblle.com/how-it-works",
    },
    {
        title: "Customer Stories",
        url: "https://treblle.com/customer-stories",
    },
    {
        title: "ROI Calculator",
        url: "https://treblle.com/roi-calculator",
    },
    {
        title: "Deployment",
        url: "https://treblle.com/deployment-options",
    },
    {
        title: "Trust Center",
        url: "https://trust.treblle.com/",
        newPage: true,
    },
];

const solutionLinks: Array<FooterLink> = [
    {
        title: "Agentic Delivery Acceleration",
        url: "https://treblle.com/agentic-delivery-acceleration",
    },
    {
        title: "Sprawl Management",
        url: "https://treblle.com/sprawl-managment",
    },
    {
        title: "Operational Blindness",
        url: "https://treblle.com/operational-blindness",
    },
    {
        title: "Security and Compliance",
        url: "https://treblle.com/security-compliance",
    },
];

const industryLinks: Array<FooterLink> = [
    {
        title: "Enterprise Architects",
        url: "https://treblle.com/enterprise-architects",
    },
    {
        title: "Platform Engineering",
        url: "https://treblle.com/platform-engineering",
    },
    {
        title: "InfoSec Teams",
        url: "https://treblle.com/infosec-teams",
    },
    {
        title: "Product Innovators",
        url: "https://treblle.com/product-innovators",
    },
    {
        title: "Engineering Leadership",
        url: "https://treblle.com/engineering-leadership",
    },
];

const resourceLinks: Array<FooterLink> = [
    {
        title: "API Discovery",
        url: "https://treblle.com/product/api-discovery",
    },
    {
        title: "API Governance",
        url: "https://treblle.com/product/api-governance",
    },
    {
        title: "API Observability",
        url: "https://treblle.com/product/api-observability",
    },
    {
        title: "API Security",
        url: "https://treblle.com/product/api-security",
    },
    {
        title: "API Compliance",
        url: "https://treblle.com/product/api-compliance",
    },
    {
        title: "API Intelligence",
        url: "https://treblle.com/product/api-intelligence",
    },
    {
        title: "API Documentation",
        url: "https://treblle.com/product/api-documentation",
    },
    {
        title: "API Analytics",
        url: "https://treblle.com/product/api-analytics",
    },
];

const companyLinks: Array<FooterLink> = [
    {
        title: "About Us",
        url: "https://treblle.com/about-us",
    },
    {
        title: "Blog",
        url: "https://treblle.com/blog",
    },
    {
        title: "eBooks",
        url: "https://treblle.com/ebooks",
    },
    {
        title: "Events",
        url: "https://treblle.com/events",
    },
    {
        title: "Pricing",
        url: "https://treblle.com/pricing",
    },
    {
        title: "Integrations",
        url: "https://docs.treblle.com/integrate-treblle/treblle-integrations",
        newPage: true,
    },
    {
        title: "Documentation",
        url: "https://docs.treblle.com/",
        newPage: true,
    },
    {
        title: "Release Notes",
        url: "https://treblle.com/release-notes",
    },
];

const productGroup = {
    title: "Why Treblle",
    links: productLinks,
};

const solutionGroup = {
    title: "What We Solve",
    links: solutionLinks,
};

const industryGroup = {
    title: "Who Is It For",
    links: industryLinks,
};

const resourceGroup = {
    title: "Solutions",
    links: resourceLinks,
};

const companyGroup = {
    title: "Company",
    links: companyLinks,
};

export { companyGroup, industryGroup, productGroup, resourceGroup, solutionGroup };
