import Link from "next/link";

import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

import { ButtonIcon } from "../../../theme/icons";

type ProductMobileMenuProperties = {
    readonly isActive: boolean;
    readonly close: () => void;
    readonly closeMainMenu: () => void;
};

export function SolutionsMobileMenu({
    isActive,
    close,
    closeMainMenu,
}: ProductMobileMenuProperties) {
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
                Solutions
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
                        onClick={closeMainMenu}
                    >
                        Financial Services
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/healthcare"
                        onClick={closeMainMenu}
                    >
                        Healthcare
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/insurance"
                        onClick={closeMainMenu}
                    >
                        Insurance
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/automotive"
                        onClick={closeMainMenu}
                    >
                        Automotive
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/iot"
                        onClick={closeMainMenu}
                    >
                        IoT
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/sports-tech"
                        onClick={closeMainMenu}
                    >
                        Sports-Tech
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/telecommunications"
                        onClick={closeMainMenu}
                    >
                        Telecommunications
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/industries/travel"
                        onClick={closeMainMenu}
                    >
                        Travel
                    </Link>
                </Box>
                <styled.p
                    css={{
                        color: "darkElement.300",
                        fontSize: "12px",
                        lineHeight: "14px",
                        fontWeight: "semibold",
                        marginBottom: "8px",
                        paddingLeft: "8px",
                        marginTop: "24px",
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
                        onClick={closeMainMenu}
                    >
                        Security Initiatives
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/governance-initiatives"
                        onClick={closeMainMenu}
                    >
                        Governance Initiatives
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/ai-innovations"
                        onClick={closeMainMenu}
                    >
                        AI Innovations
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/api-monetization"
                        onClick={closeMainMenu}
                    >
                        API Monetization
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/developer-experience"
                        onClick={closeMainMenu}
                    >
                        Developer Experience
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/digital-transformation"
                        onClick={closeMainMenu}
                    >
                        Digital Transformation
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/observability-initiatives"
                        onClick={closeMainMenu}
                    >
                        Observability Initiatives
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/scaling-api-teams"
                        onClick={closeMainMenu}
                    >
                        Scaling API Teams
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/solutions/customer-tracking"
                        onClick={closeMainMenu}
                    >
                        Customer Tracking
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

const MenuLink = css({
    padding: "8px",
    borderRadius: "10px",
    cursor: "pointer",
    flexShrink: 0,
    color: "neutral.white",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});
