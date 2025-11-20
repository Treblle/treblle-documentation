import Image from "next/image";

import { Link } from "~components/ui/link.tsx";
import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

export function ProductMenu() {
    return (
        <Box
            css={{
                position: "absolute",
                bottom: "-270px",
                left: 0,
                visibility: "hidden",
                opacity: 0,
                transition: "opacity 0.6s linear, bottom 0.2s linear",
                zIndex: 100,
                paddingTop: "6px",
                _groupHover: {
                    visibility: "visible",
                    opacity: 1,
                    bottom: "-293px",
                },
            }}
        >
            {/*
             We have this additional wrapper so visually it's not connected to the trigger but under the hood it is,
             so the visibility doesn't break when moving cursor from trigger to this menu
            */}
            <Box
                css={{
                    padding: "24px",
                    borderColor: "darkElement.100",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    backgroundColor: "neutral.midnight",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                }}
            >
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        width: "100%",
                    }}
                >
                    <Box>
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
                            Platform
                        </styled.p>
                        <Box
                            css={{
                                flexShrink: 0,
                                display: "grid",
                                width: "480px",
                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            }}
                        >
                            <Link
                                eventName="navbar_product_intelligence"
                                href="https://treblle.com/product/api-intelligence/"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/observability/avatar.webp"
                                    alt="API Intelligence robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Intelligence
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_documentation"
                                href="https://treblle.com/product/api-documentation"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/documentation/avatar.webp"
                                    alt="API Documentation robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Documentation
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_security"
                                href="https://treblle.com/product/api-security"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/security/avatar.webp"
                                    alt="API Security robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Security
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_analytics"
                                href="https://treblle.com/product/api-analytics"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/analytics/avatar.webp"
                                    alt="API Analytics robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Analytics
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_governance"
                                href="https://treblle.com/product/api-governance"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/governance/avatar.webp"
                                    alt="API Governance robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Governance
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_assistant"
                                href="https://treblle.com/product/alfred"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/alfred/avatar.webp"
                                    alt="ALfred AI robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Assistant
                                </styled.span>
                            </Link>
                            <Link
                                eventName="navbar_product_testing"
                                href="https://treblle.com/product/aspen"
                                className={cx("group", ProductLink)}
                            >
                                <Image
                                    src="/product/aspen/avatar.webp"
                                    alt="Aspen robot"
                                    width={38}
                                    height={38}
                                />
                                <styled.span
                                    css={{
                                        fontSize: "14px",
                                        fontFamily: "poppins",
                                        color: "neutral.white",
                                    }}
                                >
                                    API Testing
                                </styled.span>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <styled.p
                        css={{
                            color: "darkElement.300",
                            fontSize: "12px",
                            lineHeight: "14px",
                            fontWeight: "semibold",
                            marginBottom: "8px",
                            paddingLeft: "8px",
                            textTransform: "uppercase",
                        }}
                    >
                        What&#39;s new
                    </styled.p>
                    <Box css={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <Link
                            className={cx("group", WhatsNewLink)}
                            href="https://treblle.com/news?category=release-notes"
                        >
                            <styled.span
                                css={{
                                    fontSize: "14px",
                                    fontFamily: "poppins",
                                    color: "neutral.white",
                                }}
                            >
                                Release Notes
                            </styled.span>
                            <styled.p
                                css={{
                                    fontSize: "13px",
                                    color: "darkElement.500",
                                }}
                            >
                                All updates, big and small, documented in one place
                            </styled.p>
                        </Link>
                        <Link
                            className={cx("group", WhatsNewLink)}
                            href="https://treblle.com/product/aspen"
                            target="_blank"
                        >
                            <styled.span
                                css={{
                                    fontSize: "14px",
                                    fontFamily: "poppins",
                                    color: "neutral.white",
                                }}
                            >
                                Aspen Collections
                            </styled.span>
                            <styled.p
                                css={{
                                    fontSize: "13px",
                                    color: "darkElement.500",
                                }}
                            >
                                Simplify API Collaboration with Aspen Collections
                            </styled.p>
                        </Link>
                        <Link
                            className={cx("group", WhatsNewLink)}
                            href="https://report.treblle.com"
                            target="_blank"
                        >
                            <styled.span
                                css={{
                                    fontSize: "14px",
                                    fontFamily: "poppins",
                                    color: "neutral.white",
                                }}
                            >
                                Anatomy of an API
                            </styled.span>
                            <styled.p
                                css={{
                                    fontSize: "13px",
                                    color: "darkElement.500",
                                }}
                            >
                                API report 2024 Edition is here!
                            </styled.p>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const ProductLink = css({
    padding: "8px",
    paddingRight: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "30px",
    width: "240px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});

const WhatsNewLink = css({
    padding: "8px !important",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});
