import "./index.css";
// Nextra theme must be imported after index.css so PandaCSS doesn't override default nextra styles
import "nextra-theme-docs/style.css";

// import Image from "next/image";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";

import { Footer } from "~components/sections/footer/footer";
// import { ButtonSimple } from "~components/button-simple";
import { Navbar } from "~components/sections/navbar/navbar";
import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { fontClassName } from "../styles/fonts";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

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
                        "& .nextra-sidebar": {
                            borderRight: "0.5px solid",
                            borderColor: "neutral.800",
                            minWidth: "252px",
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
                            maxWidth: "1045px",
                        },
                        "& .nextra-scrollbar .open ul": {
                            paddingLeft: "0px",
                            paddingTop: "15px",
                        },
                        "& .nextra-toc div": {
                            "&::before": {
                                position: "absolute",
                                content: "''",
                                width: "1px",
                                height: "80%",
                                top:"7",
                                left: "-10px",
                                backgroundColor: "darkElement.200",
                            },
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
                        search={false}
                        editLink={false}
                        feedback={{ content: "", labels: "", link: "" }}
                        toc={{ backToTop: false }}
                    >
                        {children}
                    </Layout>
                </Box>
            </body>
        </html>
    );
}
