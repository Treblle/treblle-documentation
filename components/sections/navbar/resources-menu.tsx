import { Link } from "~components/ui/link.tsx";
import { css, cx } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

export function ResourcesMenu() {
    return (
        <Box
            css={{
                position: "absolute",
                bottom: "-150px",
                left: { base: "-450px", xl: 0 },
                visibility: "hidden",
                opacity: 0,
                transition: "opacity 0.6s linear, bottom 0.2s linear",
                zIndex: 100,
                paddingTop: "6px",
                _groupHover: {
                    visibility: "visible",
                    opacity: 1,
                    bottom: "-174px",
                },
            }}
        >
            <Box
                css={{
                    padding: "24px",
                    backgroundColor: "neutral.midnight",
                    borderColor: "darkElement.100",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
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
                        Resources
                    </styled.p>
                    <Box
                        css={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            width: "320px",
                            alignItems: "center",
                        }}
                    >
                        <Link
                            eventName="navbar_resources_ebooks"
                            className={cx("group", MenuLink)}
                            href="https://treblle.com/ebooks"
                        >
                            eBooks
                        </Link>
                        <Link
                            eventName="navbar_resources_knowledgebase"
                            className={cx("group", MenuLink)}
                            href="https://treblle.com/knowledgebase"
                        >
                            Knowledge base
                        </Link>
                        <Link
                            eventName="navbar_resources_events"
                            className={cx("group", MenuLink)}
                            href="https://treblle.com/events"
                        >
                            Events
                        </Link>
                        <Link
                            eventName="navbar_resources_integrations"
                            className={cx("group", MenuLink)}
                            href="https://docs.treblle.com/integrations/"
                            target="_blank"
                        >
                            Integrations
                        </Link>
                        <Link
                            eventName="navbar_resources_news"
                            className={cx("group", MenuLink)}
                            href="https://treblle.com/news"
                        >
                            News
                        </Link>
                        <Link
                            eventName="navbar_resources_security"
                            className={cx("group", MenuLink)}
                            href="https://trust.treblle.com/"
                            target="_blank"
                        >
                            Security
                        </Link>
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
                        Company
                    </styled.p>
                    <Box
                        css={{
                            display: "grid",
                            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                            width: "160px",
                        }}
                    >
                        <Link className={cx("group", MenuLink)} href="https://treblle.com/blog">
                            Blog
                        </Link>
                        <Link className={cx("group", MenuLink)} href="https://treblle.com/about-us">
                            About Us
                        </Link>
                        <Link className={cx("group", MenuLink)} href="https://treblle.com/customers">
                            Customers
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const MenuLink = css({
    padding: "8px  !important",
    borderRadius: "10px",
    width: "160px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#1b1f37",
    },
});
