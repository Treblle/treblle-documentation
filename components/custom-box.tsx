import { Box } from "~styled-system/jsx";

export function CustomBox({ children }: { readonly children: React.ReactNode }) {
    return <Box css={{ color: "electric.300", fontFamily: "poppins" }}>{children}</Box>;
}
