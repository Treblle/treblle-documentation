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
        title: "API Intelligence",
        url: "/product/api-intelligence",
    },
    {
        title: "API Documentation",
        url: "/product/api-documentation",
    },
    {
        title: "API Governance",
        url: "/product/api-governance",
    },
    {
        title: "API Analytics",
        url: "/product/api-analytics",
    },
    {
        title: "API Security",
        url: "/product/api-security",
    },
    {
        title: "API Assistant",
        url: "/product/alfred",
    },
    {
        title: "API Testing",
        url: "/product/aspen",
    },
    {
        title: "API Insights",
        url: "/product/api-insights",
    },
];

const solutionLinks: Array<FooterLink> = [
    {
        title: "AI Innovations",
        url: "/solutions/ai-innovations",
    },
    {
        title: "Security Initiatives",
        url: "/solutions/security-initiatives",
    },
    {
        title: "Governance Initiatives",
        url: "/solutions/governance-initiatives",
    },
    {
        title: "Observability Initiatives",
        url: "/solutions/observability-initiatives",
    },
    {
        title: "Digital Transformation",
        url: "/solutions/digital-transformation",
    },
    {
        title: "Developer Experience",
        url: "/solutions/developer-experience",
    },
    {
        title: "Scaling API Teams",
        url: "/solutions/scaling-api-teams",
    },
    {
        title: "API Monetization",
        url: "/solutions/api-monetization",
    },
    {
        title: "Customer Tracking",
        url: "/solutions/customer-tracking",
    },
];

const industryLinks: Array<FooterLink> = [
    {
        title: "Financial Services",
        url: "/industries/financial-services",
    },
    {
        title: "Insurance",
        url: "/industries/insurance",
    },
    {
        title: "Healthcare",
        url: "/industries/healthcare",
    },
    {
        title: "Travel",
        url: "/industries/travel",
    },
    {
        title: "Automotive",
        url: "/industries/automotive",
    },
    {
        title: "IoT",
        url: "/industries/iot",
    },
    {
        title: "Sports-Tech",
        url: "/industries/sports-tech",
    },
    {
        title: "Telecommunications",
        url: "/industries/telecommunications",
    },
];

const resourceLinks: Array<FooterLink> = [
    {
        title: "eBooks",
        url: "/ebooks",
    },
    {
        title: "Events",
        url: "/events",
    },
    {
        title: "News",
        url: "/news",
    },
    {
        title: "Knowledge base",
        url: "/knowledgebase",
    },
    {
        title: "Documentation",
        url: "https://docs.treblle.com/",
        newPage: true,
    },
    {
        title: "Integrations",
        url: "https://docs.treblle.com/integrations/",
        newPage: true,
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Only for LLMs",
        url: "/llm-info",
    },
];

const companyLinks: Array<FooterLink> = [
    {
        title: "About Us",
        url: "/about-us",
    },
    {
        title: "Careers",
        url: "/careers",
    },
    {
        title: "Enterprise",
        url: "/enterprise",
    },
    {
        title: "Book a Demo",
        url: "/book-a-demo",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Customers",
        url: "/customers",
    },
    {
        title: "Security",
        url: "https://trust.treblle.com/",
        newPage: true,
    },
];

const productGroup = {
    title: "Product",
    links: productLinks,
};

const solutionGroup = {
    title: "Solutions",
    links: solutionLinks,
};

const industryGroup = {
    title: "Industries",
    links: industryLinks,
};

const resourceGroup = {
    title: "Resources",
    links: resourceLinks,
};

const companyGroup = {
    title: "Company",
    links: companyLinks,
};

export { companyGroup, industryGroup, productGroup, resourceGroup, solutionGroup };
