import "./index.css";
// Nextra theme must be imported after index.css so PandaCSS doesn't override default nextra styles
import "nextra-theme-docs/style.css";

// import Image from "next/image";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";

import { Footer } from "~components/sections/footer/footer";
import { Navbar } from "~components/sections/navbar/navbar";
import SectionHandler from "~components/ui/section-handler";
import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { fontClassName } from "../styles/fonts";

const navbar = <Navbar />;
const footer = <Footer />;

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
                <Box
                    className={css({
                        backgroundColor: "neutral.midnight",
                        position: "relative",
                        "& .nextra-sidebar": {
                            position: "relative",
                            top: 0,
                            userSelect: "auto",
                            opacity: 1,
                            visibility: "visible",
                            borderRight: "0.5px solid",
                            borderColor: "neutral.800",
                            display: "block",
                            width: { base: "100vw", md: "252px" },
                            minWidth: "252px",
                            height: "auto",
                            transition: "all 0.3s ease-in-out",
                        },
                        "& .nextra-scrollbar li div": {
                            width: { base: "100%", md: "200px" },
                        },
                        "& .nextra-sidebar.hidden": {
                            opacity: 0,
                            userSelect: "none",
                            visibility: "hidden",
                            position: "absolute",
                            top: "-10%",
                            transition: "all 0.3s ease-in-out",
                        },
                        "& div:has(aside)": {
                            display: "flex",
                            flexDirection: { base: "column", md: "row" },
                        },
                        "& .active a": {
                            color: "electric.200",
                            fontWeight: "600",
                            borderRadius: "4px",
                            backgroundColor: "darkElement.100",
                            position: "relative",
                            "&::after": {
                                content: "''",
                                position: "absolute",
                                left: 0,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "2px",
                                height: "24px",
                                backgroundColor: "electric.200",
                                overflow: "hidden",
                                borderRadius: "4px",
                            },
                        },
                        "& article": {
                            maxWidth: "1054px",
                        },
                        "& .nextra-scrollbar .open ul": {
                            paddingLeft: "0px",
                            paddingTop: "15px",
                        },
                        "& .nextra-toc, & .nextra-sidebar": {
                            paddingTop: { base: "0px", md: "10px" },
                        },
                        "& .nextra-toc div": {
                            "&::before": {
                                position: "absolute",
                                content: "''",
                                width: "1px",
                                height: "80%",
                                top: "7px",
                                left: "-10px",
                                backgroundColor: "darkElement.200",
                            },
                        },
                        "& .nextra-scrollbar a": {
                            fontWeight: "normal",
                        },
                        "& article .nextra-breadcrumb a:nth-child(1)": {
                            "&::before": {
                                content: "''",
                            },
                            "&::after": {
                                content: "''",
                            },
                            padding: "0px",
                        },
                        "& article div a:first-child, & article div a:last-child": {
                            "&::before": {
                                fontSize: "12px",
                                width: "max-content",
                                height: "16px",
                                color: "neutral.400",
                            },
                            padding: "10px 30px",
                        },
                    })}
                >
                    <Layout
                        banner={false}
                        navbar={navbar}
                        pageMap={await getPageMap()}
                        docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                        footer={footer}
                        darkMode={false}
                        sidebar={{ toggleButton: false }}
                        editLink={false}
                        feedback={{ content: "", labels: "", link: "" }}
                        toc={{ backToTop: false }}
                        navigation={false}
                    >
                        <SectionHandler title="Treblle Docs" sectionClass="nextra-sidebar" />
                        {children}
                    </Layout>
                </Box>
            </body>
        </html>
    );
}
