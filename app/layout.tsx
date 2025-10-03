import "./index.css";
// Nextra theme must be imported after index.css so PandaCSS doesn't override default nextra styles
import "nextra-theme-docs/style.css";

// import Image from "next/image";
import { Banner, Head} from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";

import {Footer} from "~components/sections/footer/footer";
// import { ButtonSimple } from "~components/button-simple";
import { Navbar } from "~components/sections/navbar/navbar";

// import { css } from "../styled-system/css";
import { fontClassName } from "../styles/fonts";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;

const navbar = <Navbar />;
const footer = (
    <Footer />
);

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
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                    footer={footer}
                    darkMode={false}
                    sidebar={{ toggleButton: false }}
                    search={false}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
