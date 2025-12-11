import { ChevronRight, Info, SquareCode } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Search as SearchComponent } from "nextra/components";

import LandingPageCards from "~components/landing-page/landing-page-cards";
import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../theme/icons";

export default function Home() {
    return (
        <Box>
            <Box
                className={css({
                    maxWidth: "1400px",
                    margin: "0 auto",
                    marginBottom: "80px",
                })}
            >
                <Box
                    className={css({
                        maxWidth: "1400px",
                        height: "80vh",
                        backgroundImage: "url('/svg/landing-page-background.svg')",
                        backgroundSize: "cover",
                        borderRadius: "20px",
                        marginTop: "24px",
                        paddingTop: "80px",
                    })}
                >
                    <Box
                        className={css({
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            margin: "0 auto",
                            maxWidth: "600px",
                        })}
                    >
                        <button
                            className={css({
                                width: "160px",
                                height: "32px",
                                borderRadius: "22px",
                                paddingX: "16px",
                                paddingY: "8px",
                                backgroundColor: "#1b1e3199",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                cursor: "pointer",
                                marginTop: "60px",
                                "&:hover": {
                                    outline: "1px solid #29304b",
                                },
                            })}
                        >
                            <Link
                                href="https://treblle.com/news?category=release-notes"
                                className={css({
                                    fontSize: "14px",
                                    color: "#fff",
                                })}
                            >
                                Release Notes
                            </Link>
                            <ChevronRight
                                className={css({
                                    width: "16px",
                                    height: "16px",
                                    color: "#fff",
                                })}
                            />
                        </button>
                        <h1
                            className={css({
                                fontSize: { base: "32px", lg: "48px" },
                                fontWeight: 600,
                                lineHeight: 1.13,
                                color: "#fff",
                                marginTop: "12px",
                            })}
                        >
                            Treblle Documentation
                        </h1>
                        <p
                            className={css({
                                color: "darkElement.500",
                                textAlign: "center",
                                fontSize: "18px",
                                marginTop: "20px",
                                marginBottom: "32px",
                            })}
                        >
                            API Intelligence Platform, helping engineering and product teams build,
                            ship, and understand their APIs in one place.
                        </p>
                        <Box
                            className={css({
                                backgroundColor: "#1b1e314c",
                                borderRadius: "22px",
                                border: "0.2px solid darkElement.400",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingX: "12px",
                                outline: "1px solid #29304b",
                            })}
                        >
                            <Search
                                className={css({
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "transparent !important",
                                    color: "#fff",
                                })}
                            />
                            <SearchComponent
                                placeholder="Search"
                                className={css({
                                    borderRadius: "22px",
                                    outline: "none !important",
                                    border: "none !important",
                                    color: "#fff",
                                    boxShadow: "none !important",
                                    "&:focus": {
                                        outline: "none !important",
                                        border: "none !important",
                                        boxShadow: "none !important",
                                    },
                                    "& input": {
                                        backgroundColor: "transparent !important",
                                        outline: "none !important",
                                        border: "none !important",
                                        "&:focus": {
                                            outline: "none !important",
                                            border: "none !important",
                                            boxShadow: "none !important",
                                        },
                                        "&::placeholder": {
                                            color: "#fff",
                                        },
                                    },
                                })}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    className={css({
                        paddingX: { base: "16px", md: "24px", lg: "32px", xl: "0px" },
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { md: "12px", lg: "18px", xl: "24px" },
                        marginTop: "-130px",
                    })}
                >
                    <Link href="/getting-started/quickstart" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <Info
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Getting Started"
                            description="Set up your workspace in just a few clicks."
                        />
                    </Link>
                    <Link href="/integrate-treblle/integrations" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <SquareCode
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Integrate Treblle"
                            description="Connect your API to unlock real-time monitoring and insights."
                        />
                    </Link>
                    <Link href="/explore-treblle/workspace/home" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <Icon
                                    icon="ApiCube"
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Explore Treblle"
                            description="Discover powerful tools to improve performance and collaboration."
                        />
                    </Link>
                    <Link href="/workflow-tutorials/customer-support" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <SquareCode
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Workflow Tutorials"
                            description="Learn how to use Treblle with different workflows."
                        />
                    </Link>
                    <Link href="/resources/faqs" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <Icon
                                    icon="ApiCube"
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Resources"
                            description="Access guides, FAQs, and helpful resources to get the most out of Treblle."
                        />
                    </Link>
                    <Link href="/trust-center/certifications" className={landingPageLink}>
                        <LandingPageCards
                            icon={
                                <Icon
                                    icon="ApiCube"
                                    className={css({
                                        width: "23px",
                                        height: "23px",
                                        color: "#9ea2bd",
                                    })}
                                />
                            }
                            title="Trust Center"
                            description="Learn about our security, compliance, and privacy commitments."
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

const landingPageLink = css({
    width: { base: "100%", md: "280px", lg: "300px", xl: "400px" },
    display:"flex",
    alignItems: "stretch",
});
