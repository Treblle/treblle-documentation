import nextra from "nextra";
import type { NextConfig } from "next";

// Set up Nextra with its configuration
const withNextra = nextra({
    mdxOptions: {
        rehypePrettyCodeOptions: {
            theme: {
                dark: "nord",
                light: "nord",
            },
        },
    },
});

const nextConfig: NextConfig = {
    feedback: false,
    async redirects() {
        return [
            // ============================================================================
            // SDK TO INTEGRATIONS MIGRATION REDIRECTS
            // ============================================================================
            
            // Main SDKs page redirect
            {
                source: "/integrate-treblle/sdks",
                destination: "/integrate-treblle/treblle-integrations",
                permanent: true,
            },
            
            // Python SDKs
            {
                source: "/integrate-treblle/sdks/python/django",
                destination: "/integrate-treblle/integrations/python/django",
                permanent: true,
            },
            {
                source: "/integrate-treblle/sdks/python/flask",
                destination: "/integrate-treblle/integrations/python/flask",
                permanent: true,
            },
            
            // JavaScript/Node.js SDKs (catch-all for all JS frameworks)
            {
                source: "/integrate-treblle/sdks/javascript/:path*",
                destination: "/integrate-treblle/integrations/javascript/:path*",
                permanent: true,
            },
            
            // PHP SDKs (catch-all)
            {
                source: "/integrate-treblle/sdks/php/:path*",
                destination: "/integrate-treblle/integrations/php/:path*",
                permanent: true,
            },
            
            // Java SDKs (catch-all)
            {
                source: "/integrate-treblle/sdks/java/:path*",
                destination: "/integrate-treblle/integrations/java/:path*",
                permanent: true,
            },
            
            // .NET SDKs (catch-all)
            {
                source: "/integrate-treblle/sdks/dotnet/:path*",
                destination: "/integrate-treblle/integrations/dotnet/:path*",
                permanent: true,
            },
            
            // Go SDK
            {
                source: "/integrate-treblle/sdks/go",
                destination: "/integrate-treblle/integrations/go",
                permanent: true,
            },
            
            // Ruby SDK
            {
                source: "/integrate-treblle/sdks/ruby",
                destination: "/integrate-treblle/integrations/ruby",
                permanent: true,
            },

            // ============================================================================
            // CUSTOM INTEGRATION REDIRECTS
            // ============================================================================
            
            // SDK to Integration migration
            {
                source: "/integrate-treblle/custom-sdk",
                destination: "/integrate-treblle/custom-integration",
                permanent: true,
            },
            
            // Legacy custom path
            {
                source: "/integrations/custom",
                destination: "/integrate-treblle/custom-integration",
                permanent: true,
            },
            
            // Old en/ path
            {
                source: "/en/sdk-development",
                destination: "/integrate-treblle/custom-integration",
                permanent: true,
            },

            // ============================================================================
            // INTEGRATION REDIRECTS
            // ============================================================================

            // Main integrations page
            {
                source: "/en/integrations",
                destination: "/integrate-treblle/treblle-integrations",
                permanent: true,
            },

            // Legacy /integrations path
            {
                source: "/integrations",
                destination: "/integrate-treblle/treblle-integrations",
                permanent: true,
            },

            // Ruby
            {
                source: "/en/integrations/ruby",
                destination: "/integrate-treblle/integrations/ruby",
                permanent: true,
            },
            {
                source: "/integrations/ruby",
                destination: "/integrate-treblle/integrations/ruby",
                permanent: true,
            },

            // JavaScript frameworks
            {
                source: "/en/integrations/sails",
                destination: "/integrate-treblle/integrations/javascript/sails",
                permanent: true,
            },
            {
                source: "/integrations/javascript/sails",
                destination: "/integrate-treblle/integrations/javascript/sails",
                permanent: true,
            },
            {
                source: "/integrations/javascript/sails/",
                destination: "/integrate-treblle/integrations/javascript/sails",
                permanent: true,
            },
            {
                source: "/en/integrations/adonisjs",
                destination: "/integrate-treblle/integrations/javascript/adonis",
                permanent: true,
            },
            {
                source: "/integrations/javascript/adonis",
                destination: "/integrate-treblle/integrations/javascript/adonis",
                permanent: true,
            },
            {
                source: "/integrations/javascript/adonis/",
                destination: "/integrate-treblle/integrations/javascript/adonis",
                permanent: true,
            },
            {
                source: "/en/integrations/strapi",
                destination: "/integrate-treblle/integrations/javascript/strapi",
                permanent: true,
            },
            {
                source: "/integrations/javascript/strapi",
                destination: "/integrate-treblle/integrations/javascript/strapi",
                permanent: true,
            },
            {
                source: "/integrations/javascript/strapi/",
                destination: "/integrate-treblle/integrations/javascript/strapi",
                permanent: true,
            },
            {
                source: "/en/integrations/koa",
                destination: "/integrate-treblle/integrations/javascript/koa",
                permanent: true,
            },
            {
                source: "/integrations/javascript/koa",
                destination: "/integrate-treblle/integrations/javascript/koa",
                permanent: true,
            },
            {
                source: "/integrations/javascript/koa/",
                destination: "/integrate-treblle/integrations/javascript/koa",
                permanent: true,
            },
            {
                source: "/en/integrations/node",
                destination: "/integrate-treblle/integrations/javascript/node",
                permanent: true,
            },
            {
                source: "/integrations/javascript/node",
                destination: "/integrate-treblle/integrations/javascript/node",
                permanent: true,
            },
            {
                source: "/integrations/javascript/node/",
                destination: "/integrate-treblle/integrations/javascript/node",
                permanent: true,
            },
            {
                source: "/en/integrations/express",
                destination: "/integrate-treblle/integrations/javascript/express",
                permanent: true,
            },
            {
                source: "/integrations/javascript/express",
                destination: "/integrate-treblle/integrations/javascript/express",
                permanent: true,
            },
            {
                source: "/integrations/javascript/express/",
                destination: "/integrate-treblle/integrations/javascript/express",
                permanent: true,
            },
            {
                source: "/en/integrations/fastify",
                destination: "/integrate-treblle/integrations/javascript/fastify",
                permanent: true,
            },
            {
                source: "/integrations/javascript/fastify",
                destination: "/integrate-treblle/integrations/javascript/fastify",
                permanent: true,
            },
            {
                source: "/integrations/javascript/fastify/",
                destination: "/integrate-treblle/integrations/javascript/fastify",
                permanent: true,
            },
            {
                source: "/en/integrations/directus",
                destination: "/integrate-treblle/integrations/javascript/directus",
                permanent: true,
            },
            {
                source: "/integrations/javascript/directus",
                destination: "/integrate-treblle/integrations/javascript/directus",
                permanent: true,
            },
            {
                source: "/integrations/javascript/directus/",
                destination: "/integrate-treblle/integrations/javascript/directus",
                permanent: true,
            },
            {
                source: "/en/integrations/nest",
                destination: "/integrate-treblle/integrations/javascript/nest",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nest",
                destination: "/integrate-treblle/integrations/javascript/nest",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nest/",
                destination: "/integrate-treblle/integrations/javascript/nest",
                permanent: true,
            },
            {
                source: "/en/integrations/nextjs",
                destination: "/integrate-treblle/integrations/javascript/nextjs",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nextjs",
                destination: "/integrate-treblle/integrations/javascript/nextjs",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nextjs/",
                destination: "/integrate-treblle/integrations/javascript/nextjs",
                permanent: true,
            },

            // Go
            {
                source: "/en/integrations/go",
                destination: "/integrate-treblle/integrations/go",
                permanent: true,
            },
            {
                source: "/integrations/go",
                destination: "/integrate-treblle/integrations/go",
                permanent: true,
            },
            {
                source: "/integrations/go/core",
                destination: "/integrate-treblle/integrations/go",
                permanent: true,
            },

            // PHP
            {
                source: "/en/integrations/lumen",
                destination: "/integrate-treblle/integrations/php/lumen",
                permanent: true,
            },
            {
                source: "/integrations/php/lumen",
                destination: "/integrate-treblle/integrations/php/lumen",
                permanent: true,
            },
            {
                source: "/integrations/php/lumen/",
                destination: "/integrate-treblle/integrations/php/lumen",
                permanent: true,
            },
            {
                source: "/en/integrations/symfony",
                destination: "/integrate-treblle/integrations/php/symfony",
                permanent: true,
            },
            {
                source: "/integrations/php/symfony",
                destination: "/integrate-treblle/integrations/php/symfony",
                permanent: true,
            },
            {
                source: "/integrations/php/symfony/",
                destination: "/integrate-treblle/integrations/php/symfony",
                permanent: true,
            },
            {
                source: "/en/integrations/laravel",
                destination: "/integrate-treblle/integrations/php/laravel",
                permanent: true,
            },
            {
                source: "/integrations/php/laravel",
                destination: "/integrate-treblle/integrations/php/laravel",
                permanent: true,
            },
            {
                source: "/integrations/php/laravel/",
                destination: "/integrate-treblle/integrations/php/laravel",
                permanent: true,
            },
            {
                source: "/en/integrations/php",
                destination: "/integrate-treblle/integrations/php/no-framework",
                permanent: true,
            },
            {
                source: "/integrations/php/no-framework",
                destination: "/integrate-treblle/integrations/php/no-framework",
                permanent: true,
            },
            {
                source: "/integrations/php/no-framework/",
                destination: "/integrate-treblle/integrations/php/no-framework",
                permanent: true,
            },

            // Python
            {
                source: "/en/integrations/django",
                destination: "/integrate-treblle/integrations/python/django",
                permanent: true,
            },
            {
                source: "/en/integrations/flask",
                destination: "/integrate-treblle/integrations/python/flask",
                permanent: true,
            },
            {
                source: "/integrations/python/django",
                destination: "/integrate-treblle/integrations/python/django",
                permanent: true,
            },
            {
                source: "/integrations/python/flask",
                destination: "/integrate-treblle/integrations/python/flask",
                permanent: true,
            },

            // Java
            {
                source: "/en/integrations/spring",
                destination: "/integrate-treblle/integrations/java/spring",
                permanent: true,
            },
            {
                source: "/integrations/java/spring",
                destination: "/integrate-treblle/integrations/java/spring",
                permanent: true,
            },
            {
                source: "/integrations/java/aws-lambda",
                destination: "/integrate-treblle/integrations/java/aws-lambda",
                permanent: true,
            },
            {
                source: "/integrations/java/javax",
                destination: "/integrate-treblle/integrations/java/javax",
                permanent: true,
            },

            // .NET
            {
                source: "/en/integrations/net-core",
                destination: "/integrate-treblle/integrations/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/en/integrations/net",
                destination: "/integrate-treblle/integrations/dotnet/dotnet",
                permanent: true,
            },
            {
                source: "/integrations/net/net-core",
                destination: "/integrate-treblle/integrations/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/integrations/net/net-core/",
                destination: "/integrate-treblle/integrations/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/integrations/net/net",
                destination: "/integrate-treblle/integrations/dotnet/dotnet",
                permanent: true,
            },
            {
                source: "/integrations/net/net/",
                destination: "/integrate-treblle/integrations/dotnet/dotnet",
                permanent: true,
            },

            // Ruby
            {
                source: "/integrations/ruby/rails",
                destination: "/integrate-treblle/integrations/ruby",
                permanent: true,
            },
            {
                source: "/integrations/ruby/rails/",
                destination: "/integrate-treblle/integrations/ruby",
                permanent: true,
            },

            // Community SDKs
            {
                source: "/en/integrations/community-sdks",
                destination: "/integrate-treblle/treblle-integrations#community-sdks",
                permanent: true,
            },

            // ============================================================================
            // API GATEWAYS REDIRECTS
            // ============================================================================

            {
                source: "/integrations/gateways/kong",
                destination: "/integrate-treblle/api-gateways/kong",
                permanent: true,
            },
            {
                source: "/integrations/gateways/traefik",
                destination: "/integrate-treblle/api-gateways/traefik",
                permanent: true,
            },
            {
                source: "/integrations/gateways/wso2",
                destination: "/integrate-treblle/api-gateways/wso2",
                permanent: true,
            },
            {
                source: "/integrations/gateways/aws",
                destination: "/integrate-treblle/api-gateways/aws",
                permanent: true,
            },
            {
                source: "/integrations/gateways/azure",
                destination: "/integrate-treblle/api-gateways/azure",
                permanent: true,
            },
            {
                source: "/integrations/gateways/apigee",
                destination: "/integrate-treblle/api-gateways/apigee",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft",
                destination: "/integrate-treblle/api-gateways/mulesoft/policy",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/",
                destination: "/integrate-treblle/api-gateways/mulesoft/policy",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft-app",
                destination: "/integrate-treblle/api-gateways/mulesoft/app",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft-app/",
                destination: "/integrate-treblle/api-gateways/mulesoft/app",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/policy",
                destination: "/integrate-treblle/api-gateways/mulesoft/policy",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/app",
                destination: "/integrate-treblle/api-gateways/mulesoft/app",
                permanent: true,
            },

            // ============================================================================
            // WORKSPACE-LEVEL REDIRECTS
            // ============================================================================

            // Alfred AI
            {
                source: "/treblle/alfred",
                destination: "/explore-treblle/workspace/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/alfred-ai",
                destination: "/explore-treblle/workspace/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/ai-assistant",
                destination: "/explore-treblle/workspace/alfred-ai",
                permanent: true,
            },

            // API Catalog
            {
                source: "/features/api-catalog",
                destination: "/explore-treblle/workspace/catalog",
                permanent: true,
            },
            {
                source: "/treblle/api-catalog",
                destination: "/explore-treblle/workspace/catalog",
                permanent: true,
            },

            // Trace
            {
                source: "/treblle/api-traceability",
                destination: "/explore-treblle/workspace/trace",
                permanent: true,
            },
            {
                source: "/treblle/trace",
                destination: "/explore-treblle/workspace/trace",
                permanent: true,
            },

            // APIs List
            {
                source: "/treblle/apilist",
                destination: "/explore-treblle/workspace/apis",
                permanent: true,
            },

            // Home/Dashboard
            {
                source: "/treblle/workspace-dashboard",
                destination: "/explore-treblle/workspace/home",
                permanent: true,
            },
            {
                source: "/treblle/dashboard",
                destination: "/explore-treblle/workspace/home",
                permanent: true,
            },
            {
                source: "/en/dashboard",
                destination: "/explore-treblle/workspace/home",
                permanent: true,
            },
            {
                source: "/en/dashboard/customize-dashboard",
                destination: "/explore-treblle/workspace/home",
                permanent: true,
            },

            // Security Dashboard
            {
                source: "/treblle/security-dashboard",
                destination: "/explore-treblle/workspace/security-dashboard",
                permanent: true,
            },

            // Developer Portal
            {
                source: "/treblle/dev-portal",
                destination: "/explore-treblle/workspace/developer-portal",
                permanent: true,
            },

            // ============================================================================
            // PLATFORM-LEVEL REDIRECTS
            // ============================================================================

            // API Dashboard
            {
                source: "/treblle/api-dashboard",
                destination: "/explore-treblle/platform/api-dashboard",
                permanent: true,
            },

            // Requests
            {
                source: "/treblle/requests",
                destination: "/explore-treblle/platform/requests/dashboard",
                permanent: true,
            },
            {
                source: "/en/dashboard/requests",
                destination: "/explore-treblle/platform/requests/dashboard",
                permanent: true,
            },

            // Metadata
            {
                source: "/treblle/metadata",
                destination: "/explore-treblle/platform/metadata",
                permanent: true,
            },

            // Endpoints
            {
                source: "/treblle/endpoints",
                destination: "/explore-treblle/platform/endpoints",
                permanent: true,
            },
            {
                source: "/en/dashboard/endpoints",
                destination: "/explore-treblle/platform/endpoints",
                permanent: true,
            },

            // Customers
            {
                source: "/treblle/customers",
                destination: "/explore-treblle/platform/customers",
                permanent: true,
            },

            // Problems
            {
                source: "/treblle/problems",
                destination: "/explore-treblle/platform/problems",
                permanent: true,
            },
            {
                source: "/en/dashboard/problems",
                destination: "/explore-treblle/platform/problems",
                permanent: true,
            },

            // API Governance
            {
                source: "/treblle/governance-dashboard",
                destination: "/explore-treblle/platform/api-governance/dashboard",
                permanent: true,
            },
            {
                source: "/treblle/governance-ruleset",
                destination: "/explore-treblle/platform/api-governance/ruleset",
                permanent: true,
            },
            {
                source: "/treblle/api-governance",
                destination: "/explore-treblle/platform/api-governance/dashboard",
                permanent: true,
            },
            {
                source: "/en/dashboard/api-score",
                destination: "/explore-treblle/platform/api-governance/dashboard",
                permanent: true,
            },

            // API Compliance
            {
                source: "/treblle/api-compliance",
                destination: "/explore-treblle/platform/api-compliance",
                permanent: true,
            },
            {
                source: "/features/api-compliance",
                destination: "/explore-treblle/platform/api-compliance",
                permanent: true,
            },

            // API Documentation
            {
                source: "/treblle/api-documentation",
                destination: "/explore-treblle/platform/api-documentation",
                permanent: true,
            },
            {
                source: "/en/dashboard/api-documentation",
                destination: "/explore-treblle/platform/api-documentation",
                permanent: true,
            },

            // API Security
            {
                source: "/treblle/api-security",
                destination: "/explore-treblle/platform/api-security/dashboard",
                permanent: true,
            },
            {
                source: "/en/dashboard/api-security",
                destination: "/explore-treblle/platform/api-security/dashboard",
                permanent: true,
            },
            {
                source: "/treblle/api-security/ddos-attack",
                destination: "/explore-treblle/platform/api-security/ddos-detection",
                permanent: true,
            },
            {
                source: "/treblle/api-security/request-information",
                destination: "/explore-treblle/platform/api-security/request-information",
                permanent: true,
            },
            {
                source: "/treblle/api-security/ip-address",
                destination: "/explore-treblle/platform/api-security/ip-security",
                permanent: true,
            },

            // Analytics
            {
                source: "/en/dashboard/api-analytics",
                destination: "/explore-treblle/platform/analytics",
                permanent: true,
            },

            // Sustainability
            {
                source: "/treblle/sustainability",
                destination: "/explore-treblle/platform/sustainability",
                permanent: true,
            },

            // Observability
            {
                source: "/treblle/observability-as-a-service",
                destination: "/explore-treblle/platform/observability-as-a-service",
                permanent: true,
            },

            // Data Masking
            {
                source: "/treblle/data-masking",
                destination: "/explore-treblle/platform/data-masking",
                permanent: true,
            },
            {
                source: "/security/masking",
                destination: "/explore-treblle/platform/data-masking",
                permanent: true,
            },
            {
                source: "/en/security/masked-fields",
                destination: "/explore-treblle/platform/data-masking",
                permanent: true,
            },

            // AI Agent Detection
            {
                source: "/treblle/ai-agent-detection",
                destination: "/explore-treblle/platform/requests/ai-agent-detection",
                permanent: true,
            },

            // Alerts
            {
                source: "/features/default-alert",
                destination: "/explore-treblle/platform/alerts/default-alerts",
                permanent: true,
            },
            {
                source: "/features/default-alert/",
                destination: "/explore-treblle/platform/alerts/default-alerts",
                permanent: true,
            },
            {
                source: "/features/default-alerts",
                destination: "/explore-treblle/platform/alerts/default-alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alert",
                destination: "/explore-treblle/platform/alerts/custom-alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alert/",
                destination: "/explore-treblle/platform/alerts/custom-alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alerts",
                destination: "/explore-treblle/platform/alerts/custom-alerts",
                permanent: true,
            },
            {
                source: "/features/spike-alerts",
                destination: "/explore-treblle/platform/alerts/spike-alerts",
                permanent: true,
            },

            // ============================================================================
            // ADMIN & ACCOUNT REDIRECTS
            // ============================================================================

            // User Management
            {
                source: "/admin/invite-users",
                destination: "/explore-treblle/admin/user-management/people",
                permanent: true,
            },
            {
                source: "/admin/manage-your-workspace",
                destination: "/explore-treblle/admin/user-management/people",
                permanent: true,
            },

            // Roles and Permissions
            {
                source: "/admin/roles-and-permissions",
                destination: "/explore-treblle/admin/roles-and-permissions",
                permanent: true,
            },

            // Billing
            {
                source: "/admin/billing-subscription",
                destination: "/explore-treblle/admin/billing",
                permanent: true,
            },

            // Projects (legacy)
            {
                source: "/en/dashboard/projects",
                destination: "/explore-treblle/workspace/apis",
                permanent: true,
            },

            // Workspace Settings
            {
                source: "/admin/workspace-settings",
                destination: "/explore-treblle/admin/workspace-settings",
                permanent: true,
            },

            // Password Management
            {
                source: "/admin/password",
                destination: "/explore-treblle/admin/password",
                permanent: true,
            },

            // SSO
            {
                source: "/admin/single-sign-on",
                destination: "/explore-treblle/sso/treblle",
                permanent: true,
            },

            // Account
            {
                source: "/treblle/profile",
                destination: "/explore-treblle/account/profile",
                permanent: true,
            },
            {
                source: "/treblle/preferences",
                destination: "/explore-treblle/account/preferences",
                permanent: true,
            },
            {
                source: "/treblle/security-and-access",
                destination: "/explore-treblle/account/security",
                permanent: true,
            },

            // ============================================================================
            // API TOOLKIT REDIRECTS
            // ============================================================================

            // Aspen
            {
                source: "/treblle/aspen",
                destination: "/explore-treblle/api-toolkit/aspen",
                permanent: true,
            },
            {
                source: "/aspen",
                destination: "/explore-treblle/api-toolkit/aspen",
                permanent: true,
            },

            // API Insights
            {
                source: "/treblle/api-insights",
                destination: "/explore-treblle/api-toolkit/api-insights",
                permanent: true,
            },

            // ============================================================================
            // GENERAL REDIRECTS
            // ============================================================================

            // Security
            {
                source: "/security/",
                destination: "/trust-center/certifications",
                permanent: true,
            },
            {
                source: "/security/certification",
                destination: "/trust-center/certifications",
                permanent: true,
            },

            // FAQs
            {
                source: "/faqs",
                destination: "/resources/faqs",
                permanent: true,
            },

            // Getting Started
            {
                source: "/en/who-is-treblle-for",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/en/introduction",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/en/introduction/",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/guides",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/guides/",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/guides/getting-started",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/guides/how-treblle-works",
                destination: "/getting-started/how-treblle-works",
                permanent: true,
            },
            {
                source: "/guides/onboarding",
                destination: "/getting-started/onboarding-checklist",
                permanent: true,
            },

            // GitHub Integration
            {
                source: "/integrate-treblle/github-app",
                destination: "/integrate-treblle/github-integration",
                permanent: true,
            },
        ];
    },
};

export default withNextra(nextConfig);