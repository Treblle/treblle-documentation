import { defineRecipe } from "@pandacss/dev";

export const card = defineRecipe({
    className: "card",
    base: {
        border: "1px solid",
        borderColor: "darkElement.200",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        marginY: "40px",
        flexDirection: "column",
        cursor: "default",
        _hover: {
            backgroundColor: "#1b1e31",
        },
    },
    defaultVariants: {
        variant: "group",
    },
    variants: {
        variant: {
            individual: {
                marginTop: "40px",
                marginBottom: "60px",
            },
            group: {
                marginTop: "0",
                marginBottom: "0",
            },
            tip: {
                paddingBottom: "29px",
                marginBottom: "40px",
                borderColor: "garden.300",
                backgroundColor: "rgba(17, 66, 74, 0.3)",
            },
            caution: {
                paddingBottom: "29px",
                marginBottom: "40px",
                borderColor: "atomic.200",
                backgroundColor: "rgba(78, 57, 53, 0.3)",
            },
            note: {
                paddingBottom: "29px",
                marginBottom: "40px",
                borderColor: "electric.200",
                backgroundColor: "rgba(22, 47, 107, 0.3)",
            },
            badge: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
                gap: "14.1px",
            },
        },
        size: {
            badge: {
                width: {
                    base: "100%",
                    sm: "150px",
                    md: "200px",
                    lg: "260px",
                },
            },
            group: {
                width: { base: "100%", xl: "48%" },
            },
            individual: {
                maxWidth: "100%",
            },
        },
    },
});
