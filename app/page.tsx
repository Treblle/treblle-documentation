
import { ChevronRight } from "lucide-react";
import { Info } from "lucide-react";
import { SquareCode } from 'lucide-react';
import { Search } from "nextra/components";

import LandingPageCards from "~components/landing-page/landing-page-cards";
import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx";

import { Icon } from "../theme/icons";

export default function Home() {
    return <Box>
         <Box className={css({
            maxWidth: "1400px",
            margin: "0 auto",
            marginBottom: "80px",
        })}>
            <Box
                className={css({
                    maxWidth: "1400px",
                    height: "80vh",
                    backgroundImage: `
            url('/svg/lines.svg'),
            radial-gradient(circle at 50% 0%, rgba(0, 88, 255, 0.5), rgba(1, 4, 26, 0) 73%)
        `,
                    borderRadius: "20px",
                    marginTop: "24px",
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
                        })}
                    >
                        <p
                            className={css({
                                fontSize: "14px",
                            })}
                        >
                            Release Notes
                        </p>
                        <ChevronRight
                            className={css({
                                width: "16px",
                                height: "16px",
                            })}
                        />
                    </button>
                    <h1
                        className={css({
                            fontSize: {base: "32px", lg: "48px"},
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
                        ship, and understand their REST APIs in one place.
                    </p>
                    <Search
                        className={css({
                            maxWidth: "300px",
                            height: "32px",
                            backgroundColor: "#1b1e314c",
                            borderRadius: "22px",
                            border: "0.2px solid darkElement.400",
                            overflow: "hidden",
                        })}
                        placeholder="Search"
                    />
                </Box>
            </Box>
            <Box className={css({ 
                paddingX: {base: "16px", md: "24px", lg: "32px", xl: "0px"},
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "space-between",
                gap: {md: "12px", lg: "18px", xl: "24px"}, 
                marginTop: "-80px"})}>
                <LandingPageCards icon={<Info className={css({ width: "23px", height: "23px" })} />} title="Getting Started" description="Set up your workspace in just a few clicks." />
                <LandingPageCards icon={<SquareCode className={css({ width: "23px", height: "23px" })} />} title="Integrate Treblle" description="Connect your API to unlock real-time monitoring and insights." />
                <LandingPageCards icon={<Icon icon="ApiCube" />} title="Explore Treblle" description="Discover powerful tools to improve performance and collaboration." />
            </Box>
        </Box>
    </Box>;
}
