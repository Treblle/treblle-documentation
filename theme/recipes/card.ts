import { defineRecipe } from "@pandacss/dev";

export const card = defineRecipe({
    className: "card",
    base: {
        border: "1px solid",
        borderColor: "darkElement.200",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        _hover: {
            backgroundColor:"#1b1e31",
        }
    },
    defaultVariants: {
        variant: "group",
    },
    variants: {
        variant: {
            individual: {
                maxWidth: "100%",
                marginTop: "40px",
                marginBottom: "60px",
            },
            group: {
                maxWidth: "400px",
                marginTop: "0",
                marginBottom: "0",
            },
            tip: {
                maxWidth: "100%",
                marginBottom: "40px",
                borderColor: "garden.300",
                backgroundColor: "rgba(17, 66, 74, 0.3)",
            },
            caution: {
                 maxWidth: "100%",
                marginBottom: "40px",
                borderColor: "atomic.200",
                backgroundColor: "rgba(78, 57, 53, 0.3)",
            },
            note: {
                maxWidth: "100%",
                marginBottom: "40px",
                borderColor: "electric.200",
                backgroundColor: "rgba(22, 47, 107, 0.3)",
            }
        },
    },
});