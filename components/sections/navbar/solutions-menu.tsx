import Link from "next/link";
import { useState } from "react";

import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

export function SolutionsMenu() {
    const [isAllVisible, setIsAllVisible] = useState(false);

    return (
        <Box
            css={{
                position: "absolute",
                bottom: isAllVisible ? "-352px" : "-180px",
                left: 0,
                visibility: "hidden",
                opacity: 0,
                transition: isAllVisible ? "none" : "opacity 0.6s linear, bottom 0.2s linear",
                zIndex: 100,
                paddingTop: "6px",
                _groupHover: {
                    visibility: "visible",
                    opacity: 1,
                    bottom: isAllVisible ? "-366px" : "-206px",
                },
            }}
            onMouseLeave={() => {
                setIsAllVisible(false);
            }}
        >
            <Box
                css={{
                    padding: "24px",
                    backgroundColor: "neutral.midnight",
                    borderColor: "darkElement.100",
                    borderWidth: "1px",
                    borderRadius: "20px",
                }}
            >
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "16px",
                    }}
                >
                    <Box css={{ width: "180px" }}>
                        <styled.p
                            css={{
                                color: "darkElement.300",
                                fontSize: "12px",
                                lineHeight: "14px",
                                fontWeight: "semibold",
                                marginBottom: "8px",
                                textTransform: "uppercase",
                            }}
                        >
                            By industry
                        </styled.p>
                        <Box
                            css={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Link
                                className={cx("group", MenuLink)}
                                href="/industries/financial-services"
                            >
                                Financial Services
                            </Link>
                            <Link className={cx("group", MenuLink)} href="/industries/healthcare">
                                Healthcare
                            </Link>
                            <Link className={cx("group", MenuLink)} href="/industries/insurance">
                                Insurance
                            </Link>
                            {isAllVisible && (
                                <>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/industries/automotive"
                                    >
                                        Automotive
                                    </Link>
                                    <Link className={cx("group", MenuLink)} href="/industries/iot">
                                        IoT
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/industries/sports-tech"
                                    >
                                        Sports-Tech
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/industries/telecommunications"
                                    >
                                        Telecommunications
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/industries/travel"
                                    >
                                        Travel
                                    </Link>
                                </>
                            )}
                        </Box>
                    </Box>
                    <Box
                        css={{
                            width: "1px",
                            height: "auto",
                            flexShrink: 0,
                            backgroundImage:
                                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(41,48,75,1) 50%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                    <Box css={{ width: "180px" }}>
                        <styled.p
                            css={{
                                color: "darkElement.300",
                                fontSize: "12px",
                                lineHeight: "14px",
                                fontWeight: "semibold",
                                marginBottom: "8px",
                                textTransform: "uppercase",
                            }}
                        >
                            By initiatives
                        </styled.p>
                        <Box
                            css={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Link
                                className={cx("group", MenuLink)}
                                href="/solutions/security-initiatives"
                            >
                                Security Initiatives
                            </Link>
                            <Link
                                className={cx("group", MenuLink)}
                                href="/solutions/governance-initiatives"
                            >
                                Governance Initiatives
                            </Link>
                            <Link
                                className={cx("group", MenuLink)}
                                href="/solutions/ai-innovations"
                            >
                                AI Innovations
                            </Link>
                            {isAllVisible && (
                                <>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/api-monetization"
                                    >
                                        API Monetization
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/developer-experience"
                                    >
                                        Developer Experience
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/digital-transformation"
                                    >
                                        Digital Transformation
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/observability-initiatives"
                                    >
                                        Observability Initiatives
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/scaling-api-teams"
                                    >
                                        Scaling API Teams
                                    </Link>
                                    <Link
                                        className={cx("group", MenuLink)}
                                        href="/solutions/customer-tracking"
                                    >
                                        Customer Tracking
                                    </Link>
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
                {!isAllVisible && (
                    <styled.span
                        css={{
                            fontSize: "12px",
                            color: "darkElement.500",
                            cursor: "pointer",
                            marginTop: "16px",
                            display: "block",
                        }}
                        onClick={() => {
                            setIsAllVisible(true);
                        }}
                    >
                        View All Solutions
                    </styled.span>
                )}
            </Box>
        </Box>
    );
}

const MenuLink = css({
    padding: "8px",
    borderRadius: "10px",
    cursor: "pointer",
    flexShrink: 0,
    marginLeft: "-8px",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});
