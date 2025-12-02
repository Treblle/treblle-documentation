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
            // INTEGRATION REDIRECTS
            // ============================================================================

            // Main integrations page
            {
                source: "/en/integrations",
                destination: "/integrate-treblle/integrations",
                permanent: true,
            },

            // Ruby
            {
                source: "/en/integrations/ruby",
                destination: "/integrate-treblle/sdks/ruby",
                permanent: true,
            },
            {
                source: "/integrations/ruby",
                destination: "/integrate-treblle/sdks/ruby",
                permanent: true,
            },

            // JavaScript frameworks
            {
                source: "/en/integrations/sails",
                destination: "/integrate-treblle/sdks/javascript/sails",
                permanent: true,
            },
            {
                source: "/integrations/javascript/sails",
                destination: "/integrate-treblle/sdks/javascript/sails",
                permanent: true,
            },
            {
                source: "/integrations/javascript/sails/",
                destination: "/integrate-treblle/sdks/javascript/sails",
                permanent: true,
            },
            {
                source: "/en/integrations/adonisjs",
                destination: "/integrate-treblle/sdks/javascript/adonis",
                permanent: true,
            },
            {
                source: "/integrations/javascript/adonis",
                destination: "/integrate-treblle/sdks/javascript/adonis",
                permanent: true,
            },
            {
                source: "/integrations/javascript/adonis/",
                destination: "/integrate-treblle/sdks/javascript/adonis",
                permanent: true,
            },
            {
                source: "/en/integrations/strapi",
                destination: "/integrate-treblle/sdks/javascript/strapi",
                permanent: true,
            },
            {
                source: "/integrations/javascript/strapi",
                destination: "/integrate-treblle/sdks/javascript/strapi",
                permanent: true,
            },
            {
                source: "/integrations/javascript/strapi/",
                destination: "/integrate-treblle/sdks/javascript/strapi",
                permanent: true,
            },
            {
                source: "/en/integrations/koa",
                destination: "/integrate-treblle/sdks/javascript/koa",
                permanent: true,
            },
            {
                source: "/integrations/javascript/koa",
                destination: "/integrate-treblle/sdks/javascript/koa",
                permanent: true,
            },
            {
                source: "/integrations/javascript/koa/",
                destination: "/integrate-treblle/sdks/javascript/koa",
                permanent: true,
            },
            {
                source: "/en/integrations/node",
                destination: "/integrate-treblle/sdks/javascript/node",
                permanent: true,
            },
            {
                source: "/integrations/javascript/node",
                destination: "/integrate-treblle/sdks/javascript/node",
                permanent: true,
            },
            {
                source: "/integrations/javascript/node/",
                destination: "/integrate-treblle/sdks/javascript/node",
                permanent: true,
            },
            {
                source: "/en/integrations/express",
                destination: "/integrate-treblle/sdks/javascript/express",
                permanent: true,
            },
            {
                source: "/integrations/javascript/express",
                destination: "/integrate-treblle/sdks/javascript/express",
                permanent: true,
            },
            {
                source: "/integrations/javascript/express/",
                destination: "/integrate-treblle/sdks/javascript/express",
                permanent: true,
            },
            {
                source: "/en/integrations/fastify",
                destination: "/integrate-treblle/sdks/javascript/fastify",
                permanent: true,
            },
            {
                source: "/integrations/javascript/fastify",
                destination: "/integrate-treblle/sdks/javascript/fastify",
                permanent: true,
            },
            {
                source: "/integrations/javascript/fastify/",
                destination: "/integrate-treblle/sdks/javascript/fastify",
                permanent: true,
            },
            {
                source: "/en/integrations/directus",
                destination: "/integrate-treblle/sdks/javascript/directus",
                permanent: true,
            },
            {
                source: "/integrations/javascript/directus",
                destination: "/integrate-treblle/sdks/javascript/directus",
                permanent: true,
            },
            {
                source: "/integrations/javascript/directus/",
                destination: "/integrate-treblle/sdks/javascript/directus",
                permanent: true,
            },
            {
                source: "/en/integrations/nest",
                destination: "/integrate-treblle/sdks/javascript/nest",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nest",
                destination: "/integrate-treblle/sdks/javascript/nest",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nest/",
                destination: "/integrate-treblle/sdks/javascript/nest",
                permanent: true,
            },
            {
                source: "/en/integrations/nextjs",
                destination: "/integrate-treblle/sdks/javascript/nextjs",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nextjs",
                destination: "/integrate-treblle/sdks/javascript/nextjs",
                permanent: true,
            },
            {
                source: "/integrations/javascript/nextjs/",
                destination: "/integrate-treblle/sdks/javascript/nextjs",
                permanent: true,
            },

            // Go
            {
                source: "/en/integrations/go",
                destination: "/integrate-treblle/sdks/go",
                permanent: true,
            },
            {
                source: "/integrations/go",
                destination: "/integrate-treblle/sdks/go",
                permanent: true,
            },
            {
                source: "/integrations/go/core",
                destination: "/integrate-treblle/sdks/go",
                permanent: true,
            },

            // PHP
            {
                source: "/en/integrations/lumen",
                destination: "/integrate-treblle/sdks/php/lumen",
                permanent: true,
            },
            {
                source: "/integrations/php/lumen",
                destination: "/integrate-treblle/sdks/php/lumen",
                permanent: true,
            },
            {
                source: "/integrations/php/lumen/",
                destination: "/integrate-treblle/sdks/php/lumen",
                permanent: true,
            },
            {
                source: "/en/integrations/symfony",
                destination: "/integrate-treblle/sdks/php/symfony",
                permanent: true,
            },
            {
                source: "/integrations/php/symfony",
                destination: "/integrate-treblle/sdks/php/symfony",
                permanent: true,
            },
            {
                source: "/integrations/php/symfony/",
                destination: "/integrate-treblle/sdks/php/symfony",
                permanent: true,
            },
            {
                source: "/en/integrations/laravel",
                destination: "/integrate-treblle/sdks/php/laravel",
                permanent: true,
            },
            {
                source: "/integrations/php/laravel",
                destination: "/integrate-treblle/sdks/php/laravel",
                permanent: true,
            },
            {
                source: "/integrations/php/laravel/",
                destination: "/integrate-treblle/sdks/php/laravel",
                permanent: true,
            },
            {
                source: "/en/integrations/php",
                destination: "/integrate-treblle/sdks/php",
                permanent: true,
            },
            {
                source: "/integrations/php/no-framework",
                destination: "/integrate-treblle/sdks/php",
                permanent: true,
            },
            {
                source: "/integrations/php/no-framework/",
                destination: "/integrate-treblle/sdks/php",
                permanent: true,
            },

            // Python
            {
                source: "/en/integrations/django",
                destination: "/integrate-treblle/sdks/python/django",
                permanent: true,
            },
            {
                source: "/en/integrations/flask",
                destination: "/integrate-treblle/sdks/python/flask",
                permanent: true,
            },
            {
                source: "/integrations/python/django",
                destination: "/integrate-treblle/sdks/python/django",
                permanent: true,
            },
            {
                source: "/integrations/python/flask",
                destination: "/integrate-treblle/sdks/python/flask",
                permanent: true,
            },

            // Java
            {
                source: "/en/integrations/spring",
                destination: "/integrate-treblle/sdks/java/spring",
                permanent: true,
            },
            {
                source: "/integrations/java/spring",
                destination: "/integrate-treblle/sdks/java/spring",
                permanent: true,
            },
            {
                source: "/integrations/java/aws-lambda",
                destination: "/integrate-treblle/sdks/java/aws-lambda",
                permanent: true,
            },
            {
                source: "/integrations/java/javax",
                destination: "/integrate-treblle/sdks/java/javax",
                permanent: true,
            },

            // .NET
            {
                source: "/en/integrations/net-core",
                destination: "/integrate-treblle/sdks/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/en/integrations/net",
                destination: "/integrate-treblle/sdks/dotnet/dotnet",
                permanent: true,
            },
            {
                source: "/integrations/net/net-core",
                destination: "/integrate-treblle/sdks/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/integrations/net/net-core/",
                destination: "/integrate-treblle/sdks/dotnet/net-core",
                permanent: true,
            },
            {
                source: "/integrations/net/net",
                destination: "/integrate-treblle/sdks/dotnet/dotnet",
                permanent: true,
            },
            {
                source: "/integrations/net/net/",
                destination: "/integrate-treblle/sdks/dotnet/dotnet",
                permanent: true,
            },

            // Ruby
            {
                source: "/integrations/ruby/rails",
                destination: "/integrate-treblle/sdks/ruby",
                permanent: true,
            },
            {
                source: "/integrations/ruby/rails/",
                destination: "/integrate-treblle/sdks/ruby",
                permanent: true,
            },

            // Community SDKs
            {
                source: "/en/integrations/community-sdks",
                destination: "/integrate-treblle/integrations#community-sdks",
                permanent: true,
            },

            // Custom SDK Development
            {
                source: "/integrations/custom",
                destination: "/integrate-treblle/custom-sdk",
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
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/",
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft-app",
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft-app/",
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/policy",
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },
            {
                source: "/integrations/gateways/mulesoft/app",
                destination: "/integrate-treblle/api-gateways/mulesoft",
                permanent: true,
            },

            // ============================================================================
            // DASHBOARD & PLATFORM REDIRECTS
            // ============================================================================

            {
                source: "/en/dashboard/api-score",
                destination: "/explore-treblle/platform/governance",
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
            {
                source: "/en/dashboard/api-documentation",
                destination: "/explore-treblle/platform/documentation",
                permanent: true,
            },
            {
                source: "/en/dashboard/requests",
                destination: "/explore-treblle/platform/requests",
                permanent: true,
            },
            {
                source: "/en/dashboard/problems",
                destination: "/explore-treblle/platform/problems",
                permanent: true,
            },
            {
                source: "/en/dashboard/api-security",
                destination: "/explore-treblle/platform/security",
                permanent: true,
            },
            {
                source: "/en/dashboard/endpoints",
                destination: "/explore-treblle/platform/endpoints",
                permanent: true,
            },
            {
                source: "/en/dashboard/api-analytics",
                destination: "/explore-treblle/platform/analytics",
                permanent: true,
            },
            {
                source: "/en/dashboard/projects",
                destination: "/explore-treblle/workspace/projects",
                permanent: true,
            },
            {
                source: "/treblle/dashboard",
                destination: "/explore-treblle/workspace/dashboard",
                permanent: true,
            },
            {
                source: "/treblle/workspace-dashboard",
                destination: "/explore-treblle/workspace/home",
                permanent: true,
            },
            {
                source: "/treblle/apilist",
                destination: "/explore-treblle/workspace/apis",
                permanent: true,
            },
            {
                source: "/treblle/api-traceability",
                destination: "/explore-treblle/workspace/trace",
                permanent: true,
            },
            {
                source: "/treblle/dev-portal",
                destination: "/explore-treblle/workspace/developer-portal",
                permanent: true,
            },
            {
                source: "/treblle/security-dashboard",
                destination: "/explore-treblle/workspace/security-dashboard",
                permanent: true,
            },
            {
                source: "/treblle/requests",
                destination: "/explore-treblle/platform/requests",
                permanent: true,
            },
            {
                source: "/treblle/metadata",
                destination: "/explore-treblle/platform/metadata",
                permanent: true,
            },
            {
                source: "/treblle/endpoints",
                destination: "/explore-treblle/platform/endpoints",
                permanent: true,
            },
            {
                source: "/treblle/customers",
                destination: "/explore-treblle/platform/customers",
                permanent: true,
            },
            {
                source: "/treblle/problems",
                destination: "/explore-treblle/platform/problems",
                permanent: true,
            },
            {
                source: "/treblle/governance-dashboard",
                destination: "/explore-treblle/platform/governance",
                permanent: true,
            },
            {
                source: "/treblle/governance-ruleset",
                destination: "/explore-treblle/platform/governance-ruleset",
                permanent: true,
            },
            {
                source: "/treblle/api-documentation",
                destination: "/explore-treblle/platform/documentation",
                permanent: true,
            },
            {
                source: "/treblle/api-security",
                destination: "/explore-treblle/platform/security",
                permanent: true,
            },
            {
                source: "/treblle/api-security/ddos-attack",
                destination: "/explore-treblle/platform/security",
                permanent: true,
            },
            {
                source: "/treblle/api-security/request-information",
                destination: "/explore-treblle/platform/security",
                permanent: true,
            },
            {
                source: "/treblle/api-security/ip-address",
                destination: "/explore-treblle/platform/security",
                permanent: true,
            },
            {
                source: "/treblle/sustainability",
                destination: "/explore-treblle/platform/sustainability",
                permanent: true,
            },
            {
                source: "/treblle/observability-as-a-service",
                destination: "/explore-treblle/platform/observability",
                permanent: true,
            },
            {
                source: "/treblle/data-masking",
                destination: "/explore-treblle/platform/masking",
                permanent: true,
            },
            {
                source: "/treblle/ai-agent-detection",
                destination: "/explore-treblle/platform/ai-agent-detection",
                permanent: true,
            },

            // ============================================================================
            // ACCOUNT & ADMIN REDIRECTS
            // ============================================================================

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
            {
                source: "/admin/invite-users",
                destination: "/explore-treblle/admin/invite-users",
                permanent: true,
            },
            {
                source: "/admin/manage-your-workspace",
                destination: "/explore-treblle/admin/team-management",
                permanent: true,
            },
            {
                source: "/admin/single-sign-on",
                destination: "/explore-treblle/admin/sso",
                permanent: true,
            },
            {
                source: "/admin/billing-subscription",
                destination: "/explore-treblle/admin/billing",
                permanent: true,
            },
            {
                source: "/admin/workspace-settings",
                destination: "/explore-treblle/admin/workspace-settings",
                permanent: true,
            },
            {
                source: "/admin/password",
                destination: "/explore-treblle/admin/password",
                permanent: true,
            },

            // ============================================================================
            // SECURITY REDIRECTS
            // ============================================================================

            {
                source: "/en/security/masked-fields",
                destination: "/explore-treblle/platform/masking",
                permanent: true,
            },
            {
                source: "/security",
                destination: "/trust-center/certifications",
                permanent: true,
            },
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
            {
                source: "/security/masking",
                destination: "/explore-treblle/platform/masking",
                permanent: true,
            },

            // ============================================================================
            // GENERAL REDIRECTS
            // ============================================================================

            {
                source: "/en/who-is-treblle-for",
                destination: "/getting-started/quickstart",
                permanent: true,
            },
            {
                source: "/en/sdk-development",
                destination: "/integrate-treblle/custom-sdk",
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

            // ============================================================================
            // TREBLLE FEATURES REDIRECTS
            // ============================================================================

            {
                source: "/treblle/ai-assistant",
                destination: "/explore-treblle/api-toolkit/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/alfred",
                destination: "/explore-treblle/api-toolkit/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/ai-assistant/",
                destination: "/explore-treblle/api-toolkit/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/alfred/",
                destination: "/explore-treblle/api-toolkit/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/alfred-ai",
                destination: "/explore-treblle/api-toolkit/alfred-ai",
                permanent: true,
            },
            {
                source: "/treblle/api-insights",
                destination: "/explore-treblle/api-toolkit/api-insights",
                permanent: true,
            },
            {
                source: "/aspen",
                destination: "/explore-treblle/api-toolkit/aspen",
                permanent: true,
            },

            // ============================================================================
            // FEATURES REDIRECTS
            // ============================================================================

            {
                source: "/features/default-alert",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/default-alert/",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/default-alerts",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alert",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alert/",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/custom-alerts",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/spike-alerts",
                destination: "/explore-treblle/platform/alerts",
                permanent: true,
            },
            {
                source: "/features/api-catalog",
                destination: "/explore-treblle/workspace/catalog",
                permanent: true,
            },
            {
                source: "/features/api-compliance",
                destination: "/explore-treblle/platform/compliance",
                permanent: true,
            },

            // ============================================================================
            // RESOURCES REDIRECTS
            // ============================================================================

            {
                source: "/faqs",
                destination: "/resources/faqs",
                permanent: true,
            },
        ];
    },
};

export default withNextra(nextConfig);