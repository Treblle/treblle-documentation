import Image from "next/image";

import { Link } from "~components/ui/link.tsx";
import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

import { ButtonIcon } from "../../../theme/icons";

type ProductMobileMenuProperties = {
    readonly isActive: boolean;
    readonly close: () => void;
    readonly closeMainMenu: () => void;
};

export function ProductMobileMenu({ isActive, close, closeMainMenu }: ProductMobileMenuProperties) {
    return (
        <Box
            css={{
                backgroundColor: "neutral.midnight",
                position: "fixed",
                top: "66px",
                left: 0,
                width: "100%",
                height: "calc(100vh - 66px)",
                display: "flex",
                flexDirection: "column",
                zIndex: 2001,
                overflow: "hidden",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(100%)",
                transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
            }}
        >
            <Box
                css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "neutral.white",
                    borderBottomWidth: "1px",
                    borderColor: "darkElement.200",
                }}
            >
                <ButtonIcon
                    icon="ArrowBack"
                    className={css({ color: "darkElement.500", cursor: "pointer" })}
                    onClick={close}
                />
                Product
                <Box css={{ width: "16px" }} />
            </Box>
            <Box
                css={{
                    padding: "24px",
                    overflowY: "auto",
                    scrollbar: "hidden",
                }}
            >
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
                    Platform
                </styled.p>
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Link
                        eventName="navbar_product_intelligence"
                        href="/product/api-intelligence"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
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
                        href="/product/api-documentation"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
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
                        href="/product/api-security"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
                    >
                        <Image
                            src="/product/security/avatar.webp"
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
                            API Security
                        </styled.span>
                    </Link>
                    <Link
                        eventName="navbar_product_analytics"
                        href="/product/api-analytics"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
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
                        href="/product/api-governance"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
                    >
                        <Image
                            src="/product/governance/avatar.webp"
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
                            API Governance
                        </styled.span>
                    </Link>
                    <Link
                        eventName="navbar_product_assistant"
                        href="/product/alfred"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
                    >
                        <Image
                            src="/product/alfred/avatar.webp"
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
                            API Assistant
                        </styled.span>
                    </Link>
                    <Link
                        eventName="navbar_product_testing"
                        href="/product/aspen"
                        className={cx("group", ProductLink)}
                        onClick={closeMainMenu}
                    >
                        <Image
                            src="/product/aspen/avatar.webp"
                            alt="Aspen Logo"
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
                    <Box>
                        <styled.p
                            css={{
                                color: "darkElement.300",
                                fontSize: "12px",
                                lineHeight: "14px",
                                fontWeight: "semibold",
                                marginTop: "24px",
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
                                href="/news?category=release-notes"
                                onClick={closeMainMenu}
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
                                href="/product/aspen"
                                target="_blank"
                                onClick={closeMainMenu}
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
                                onClick={closeMainMenu}
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
    width: "100%",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});

const WhatsNewLink = css({
    padding: "8px",
    borderRadius: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});
