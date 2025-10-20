import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
    className: "button",
    base: {
        alignItems: "center",
        borderRadius: "22px",
        cursor: "pointer",
        display: "inline-flex",
        outline: "none",
        transition: "all 0.3s",
        fontSize: "sm",
        paddingX: "7",
        paddingY: "2.5",
        height: "10",
        position: "relative",
    },
    defaultVariants: {
        variant: "solid",
    },
    variants: {
        variant: {
            solid: {
                backgroundColor: "electric.300",
                color: "white",
                fontWeight: "semibold",
                _hover: {
                    backgroundColor: "electric.400",
                },
                _disabled: {
                    backgroundColor: "electric.100",
                    _hover: {
                        cursor: "not-allowed",
                        backgroundColor: "electric.100",
                    },
                },
            },
            muted: {
                backgroundColor: "#22263c",
                color: "white",
                _hover: {
                    backgroundColor: "#2c3851",
                },
            },
            outline: {
                color: "midnight",
                borderWidth: "1",
                borderStyle: "solid",
                borderColor: "#6c7285",
                _hover: {
                    borderColor: "neutral.midnight",
                },
                _dark: {
                    color: "darkElement.500",
                    borderWidth: "1",
                    borderStyle: "solid",
                    borderColor: "#6c7285",
                    _hover: {
                        color: "neutral.fog",
                        borderColor: "neutral.fog",
                    },
                },
                _light: {
                    color: "neutral.midnight",
                    borderWidth: "1",
                    borderStyle: "solid",
                    borderColor: "#6c7285",
                    _hover: {
                        color: "neutral.midnight",
                        borderColor: "neutral.midnight",
                    },
                },
            },
            unstyled: {
                alignItems: "center",
                borderRadius: "none",
                cursor: "pointer",
                display: "inline",
                outline: "none",
                transition: "all 0.3s",
                fontSize: "base",
                paddingX: "0",
                paddingY: "0",
                height: "auto",
                position: "relative",
            },
        },
    },
});
