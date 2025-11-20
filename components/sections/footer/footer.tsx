import Image from "next/image";
import Link from "next/link";

import {
    companyGroup,
    industryGroup,
    productGroup,
    resourceGroup,
    solutionGroup,
} from "~data/footer.ts";
import { css } from "~styled-system/css";
import { Box, styled } from "~styled-system/jsx";

import { Icon } from "../../../theme/icons.tsx";

export function Footer() {
    return (
        <Box
            css={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <Box css={{ maxWidth: "1400px", width: "100%", paddingX: "24px" }}>
                <Box
                    css={{
                        width: "100%",
                        height: "1px",
                        backgroundImage:
                            "linear-gradient(to right, rgba(71, 78, 111, 0) 0%, #22263c 28%, #22263c 74%, rgba(34, 38, 60, 0))",
                    }}
                />
                <Box
                    css={{
                        paddingTop: "32px",
                        display: "flex",
                        flexDirection: { base: "column", lg: "row" },
                        gap: { base: "36px", lg: "64px" },
                        backgroundImage: {
                            base: "radial-gradient(50% 50% at 50% 100%, rgba(0, 88, 255, 0.3), rgba(1, 4, 26, 0) 92%)",
                            md: "radial-gradient(circle at 50% 120%, rgba(0, 88, 255, 0.3), rgba(1, 4, 26, 0) 52%)",
                        },
                    }}
                >
                    <Box css={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                        <Link href="/">
                            <Image
                                src="/treblle-white.svg"
                                alt="White Treblle logo"
                                width={102}
                                height={29}
                            />
                        </Link>
                        <Link
                            href="https://status.treblle.com/"
                            target="_blank"
                            className={SystemStatusBadge}
                        >
                            <styled.span
                                css={{
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "electric.200",
                                    borderRadius: "100%",
                                }}
                            />
                            All System Operational
                        </Link>
                        <Box
                            css={{
                                display: "flex",
                                gap: { base: "24px", lg: "32px" },
                            }}
                        >
                            <Link
                                href="https://www.linkedin.com/company/treblle/"
                                className={SocialIcon}
                                target="_blank"
                            >
                                <Icon icon="LinkedIn" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@treblle"
                                className={SocialIcon}
                                target="_blank"
                            >
                                <Icon icon="Youtube" />
                            </Link>
                            <Link
                                href="https://github.com/Treblle"
                                className={SocialIcon}
                                target="_blank"
                            >
                                <Icon icon="Github" />
                            </Link>
                        </Box>
                    </Box>

                    {/* Footer links start */}
                    <Box
                        css={{
                            flexGrow: 1,
                            display: "grid",
                            gap: "24px",
                            gridTemplateColumns: {
                                base: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(3, minmax(0, 1fr))",
                                lg: "repeat(5, minmax(0, 1fr))",
                            },
                            gridAutoRows: "auto",
                            paddingBottom: { base: "34px", md: "24px" },
                        }}
                    >
                        <Box className={FooterGroup}>
                            <styled.span className={FooterGroupTitle}>
                                {productGroup.title}
                            </styled.span>
                            <Box className={FooterLinks}>
                                {productGroup.links.map((link) => (
                                    <Link
                                        href={link.url}
                                        key={link.url}
                                        className={FooterLink}
                                        target={link.newPage ? "_blank" : "_self"}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <Box className={FooterGroup}>
                            <styled.span className={FooterGroupTitle}>
                                {solutionGroup.title}
                            </styled.span>
                            <Box className={FooterLinks}>
                                {solutionGroup.links.map((link) => (
                                    <Link
                                        href={link.url}
                                        key={link.url}
                                        className={FooterLink}
                                        target={link.newPage ? "_blank" : "_self"}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            className={FooterGroup}
                            css={{ display: { base: "none", md: "flex" } }}
                        >
                            <styled.span className={FooterGroupTitle}>
                                {industryGroup.title}
                            </styled.span>
                            <Box className={FooterLinks}>
                                {industryGroup.links.map((link) => (
                                    <Link
                                        href={link.url}
                                        key={link.url}
                                        className={FooterLink}
                                        target={link.newPage ? "_blank" : "_self"}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <Box className={FooterGroup}>
                            <styled.span className={FooterGroupTitle}>
                                {resourceGroup.title}
                            </styled.span>
                            <Box className={FooterLinks}>
                                {resourceGroup.links.map((link) => (
                                    <Link
                                        href={link.url}
                                        key={link.url}
                                        className={FooterLink}
                                        target={link.newPage ? "_blank" : "_self"}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <Box className={FooterGroup}>
                            <styled.span className={FooterGroupTitle}>
                                {companyGroup.title}
                            </styled.span>
                            <Box className={FooterLinks}>
                                {companyGroup.links.map((link) => (
                                    <Link
                                        href={link.url}
                                        key={link.url}
                                        className={FooterLink}
                                        target={link.newPage ? "_blank" : "_self"}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    {/* Footer links end */}
                </Box>
                <Box
                    css={{
                        maxWidth: "1400px",
                        width: "100%",
                        height: "1px",
                        backgroundImage:
                            "linear-gradient(to right, rgba(71, 78, 111, 0) 0%, #22263c 28%, #22263c 74%, rgba(34, 38, 60, 0))",
                    }}
                />
                <Box
                    css={{
                        maxWidth: "926px",
                        marginX: "auto",
                        color: "darkElement.400",
                        fontSize: "14px",
                        display: "flex",
                        gap: { base: "16px", lg: "0" },
                        flexDirection: { base: "column", lg: "row" },
                        alignItems: "center",
                        paddingY: "16px",
                    }}
                >
                    <styled.span>© 2025 Treblle. All Rights Reserved.</styled.span>
                    <Box
                        className={FooterDivider}
                        css={{ display: { base: "none", lg: "block" } }}
                    />
                    <Box css={{ display: "flex", alignItems: "center" }}>
                        <Link href="/privacy-policy" className={FooterLink}>
                            Privacy Policy
                        </Link>
                        <Box className={FooterDivider} />
                        <Link href="/terms-of-service" className={FooterLink}>
                            Terms of Service
                        </Link>
                    </Box>
                    <Box
                        className={FooterDivider}
                        css={{ display: { base: "none", lg: "block" } }}
                    />
                    <Box css={{ display: "flex", gap: { base: "16px", md: "24px" } }}>
                        <Image
                            src="/badges/GDPR-white.svg"
                            alt="GDPR Badge"
                            width={98}
                            height={34}
                        />
                        <Image
                            src="/badges/soc2-white.svg"
                            alt="SOC2 Badge"
                            width={37}
                            height={34}
                        />
                        <Image src="/badges/ISO-white.svg" alt="ISO Badge" width={42} height={34} />
                        <Image
                            src="/badges/hipaa-white.svg"
                            alt="HIPAA Badge"
                            width={72}
                            height={34}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const SystemStatusBadge = css({
    paddingLeft: "8px !important",
    paddingRight: "12px !important",
    paddingY: "4px !important",
    display: "flex",
    gap: "6px",
    alignItems: "center",
    color: "electric.200",
    fontSize: "14px",
    borderWidth: "1px",
    borderRadius: "15px",
    borderColor: "darkElement.200",
    width: "fit-content",
});

const SocialIcon = css({
    color: "darkElement.300",
    transition: "color 0.4s ease",
    _hover: {
        color: "darkElement.500",
    },
});

const FooterGroupTitle = css({
    fontSize: "14px",
    fontWeight: "semibold",
    fontFamily: "poppins",
    color: "neutral.white",
});

const FooterGroup = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
});
const FooterLink = css({
    fontSize: "14px",
    color: "darkElement.400",
    transition: "color 0.4s ease",
    width: "fit-content",
    _hover: {
        color: "neutral.white",
    },
});

const FooterLinks = css({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
});

const FooterDivider = css({
    width: "1px",
    height: "27px",
    backgroundColor: "darkElement.200",
    marginX: "24px",
});
