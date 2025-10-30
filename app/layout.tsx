import "./index.css";
import "./layout.css";
// Nextra theme must be imported after index.css so PandaCSS doesn't override default nextra styles
import "nextra-theme-docs/style.css";

// import Image from "next/image";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";

import { Footer } from "~components/sections/footer/footer";
import { Navbar } from "~components/sections/navbar/navbar";
import { GoogleAnalytics } from "~components/third-party/google-analytics";
import MobileSidebarToggle from "~components/ui/mobile-sidebar-toggle";
import { Box } from "~styled-system/jsx";

import { fontClassName } from "../styles/fonts";
import MyStatsig from "./my-statsig";


export default async function RootLayout({ children }: { readonly children: React.ReactNode }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
            className={fontClassName}
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Box className="layout">
                    <Layout
                        banner={false}
                        navbar={<Navbar />}
                        pageMap={await getPageMap()}
                        docsRepositoryBase="https://github.com/Treblle/treblle-documentation"
                        footer={<Footer />}
                        darkMode={false}
                        sidebar={{ toggleButton: false }}
                        editLink={false}
                        feedback={{ content: "", labels: "", link: "" }}
                        toc={{ backToTop: false }}
                        navigation={false}
                        copyPageButton={false}
                    >
                        <GoogleAnalytics />
                        <MyStatsig>
                            <MobileSidebarToggle title="Treblle Docs" sectionClass="nextra-sidebar" />
                            {children}
                        </MyStatsig>
                    </Layout>
                </Box>
            </body>
        </html>
    );
}
