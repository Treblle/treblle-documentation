import { Link } from "~components/ui/link.tsx";
import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

import { ButtonIcon } from "../../../theme/icons";

type ProductMobileMenuProperties = {
    readonly isActive: boolean;
    readonly close: () => void;
    readonly closeMainMenu: () => void;
};

export function ResourcesMobileMenu({
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
                Resources
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
                    Resources
                </styled.p>
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Link
                        eventName="navbar_resources_ebooks"
                        className={cx("group", MenuLink)}
                        href="/ebooks"
                        onClick={closeMainMenu}
                    >
                        eBooks
                    </Link>
                    <Link
                        eventName="navbar_resources_events"
                        className={cx("group", MenuLink)}
                        href="/events"
                        onClick={closeMainMenu}
                    >
                        Events
                    </Link>
                    <Link
                        eventName="navbar_resources_news"
                        className={cx("group", MenuLink)}
                        href="/news"
                        onClick={closeMainMenu}
                    >
                        News
                    </Link>
                    <Link
                        eventName="navbar_resources_news"
                        className={cx("group", MenuLink)}
                        href="/knowledgebase"
                        onClick={closeMainMenu}
                    >
                        Knowledge base
                    </Link>
                    <Link
                        eventName="navbar_resources_status"
                        className={cx("group", MenuLink)}
                        href="https://status.treblle.com/"
                        target="_blank"
                        onClick={closeMainMenu}
                    >
                        System Status
                    </Link>
                    <Link
                        eventName="navbar_resources_integrations"
                        className={cx("group", MenuLink)}
                        href="https://docs.treblle.com/integrations/"
                        target="_blank"
                        onClick={closeMainMenu}
                    >
                        Integrations
                    </Link>

                    <Link
                        eventName="navbar_resources_security"
                        className={cx("group", MenuLink)}
                        href="https://trust.treblle.com/"
                        target="_blank"
                        onClick={closeMainMenu}
                    >
                        Security
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
                    Company
                </styled.p>
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Link className={cx("group", MenuLink)} href="/blog" onClick={closeMainMenu}>
                        Blog
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/about-us"
                        onClick={closeMainMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        className={cx("group", MenuLink)}
                        href="/customers"
                        onClick={closeMainMenu}
                    >
                        Customers
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
