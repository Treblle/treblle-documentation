import { defineRecipe } from "@pandacss/dev";

export const spinner = defineRecipe({
    className: "spinner",
    base: {
        display: "inline-block",
        borderWidth: "2px",
        borderColor: "electric.200",
        borderStyle: "solid",
        borderBottomColor: "transparent",
        borderRadius: "full",
        width: "16px",
        height: "16px",
        animation: "spin",
        animationDuration: "slowest",
    },
});
