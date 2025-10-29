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
        url: "https://treblle.com/product/api-intelligence",
    },
    {
        title: "API Documentation",
        url: "https://treblle.com/product/api-documentation",
    },
    {
        title: "API Governance",
        url: "https://treblle.com/product/api-governance",
    },
    {
        title: "API Analytics",
        url: "https://treblle.com/product/api-analytics",
    },
    {
        title: "API Security",
        url: "https://treblle.com/product/api-security",
    },
    {
        title: "API Assistant",
        url: "https://treblle.com/product/alfred",
    },
    {
        title: "API Testing",
        url: "https://treblle.com/product/aspen",
    },
    {
        title: "API Insights",
        url: "https://treblle.com/product/api-insights",
    },
];

const solutionLinks: Array<FooterLink> = [
    {
        title: "AI Innovations",
        url: "https://treblle.com/solutions/ai-innovations",
    },
    {
        title: "Security Initiatives",
        url: "https://treblle.com/solutions/security-initiatives",
    },
    {
        title: "Governance Initiatives",
        url: "https://treblle.com/solutions/governance-initiatives",
    },
    {
        title: "Observability Initiatives",
        url: "https://treblle.com/solutions/observability-initiatives",
    },
    {
        title: "Digital Transformation",
        url: "https://treblle.com/solutions/digital-transformation",
    },
    {
        title: "Developer Experience",
        url: "https://treblle.com/solutions/developer-experience",
    },
    {
        title: "Scaling API Teams",
        url: "https://treblle.com/solutions/scaling-api-teams",
    },
    {
        title: "API Monetization",
        url: "https://treblle.com/solutions/api-monetization",
    },
    {
        title: "Customer Tracking",
        url: "https://treblle.com/solutions/customer-tracking",
    },
];

const industryLinks: Array<FooterLink> = [
    {
        title: "Financial Services",
        url: "https://treblle.com/industries/financial-services",
    },
    {
        title: "Insurance",
        url: "https://treblle.com/industries/insurance",
    },
    {
        title: "Healthcare",
        url: "https://treblle.com/industries/healthcare",
    },
    {
        title: "Travel",
        url: "https://treblle.com/industries/travel",
    },
    {
        title: "Automotive",
        url: "https://treblle.com/industries/automotive",
    },
    {
        title: "IoT",
        url: "https://treblle.com/industries/iot",
    },
    {
        title: "Sports-Tech",
        url: "https://treblle.com/industries/sports-tech",
    },
    {
        title: "Telecommunications",
        url: "https://treblle.com/industries/telecommunications",
    },
];

const resourceLinks: Array<FooterLink> = [
    {
        title: "eBooks",
        url: "https://treblle.com/ebooks",
    },
    {
        title: "Events",
        url: "https://treblle.com/events",
    },
    {
        title: "News",
        url: "https://treblle.com/news",
    },
    {
        title: "Knowledge base",
        url: "https://treblle.com/knowledgebase",
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
        url: "https://treblle.com/pricing",
    },
    {
        title: "Only for LLMs",
        url: "https://treblle.com/llm-info",
    },
];

const companyLinks: Array<FooterLink> = [
    {
        title: "About Us",
        url: "https://treblle.com/about-us",
    },
    {
        title: "Careers",
        url: "https://treblle.com/careers",
    },
    {
        title: "Enterprise",
        url: "https://treblle.com/enterprise",
    },
    {
        title: "Book a Demo",
        url: "https://treblle.com/book-a-demo",
    },
    {
        title: "Blog",
        url: "https://treblle.com/blog",
    },
    {
        title: "Customers",
        url: "https://treblle.com/customers",
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
