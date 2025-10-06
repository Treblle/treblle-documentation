import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
    current: {
        value: "currentColor",
    },
    transparent: {
        value: "rgb(0 0 0 / 0)",
    },
    electric: {
        500: {
            value: "#162F6B",
        },
        400: {
            value: "#0047BB",
        },
        300: {
            value: "#0058FF",
        },
        200: {
            value: "#5192FF",
        },
        100: {
            value: "#CCDEFF",
        },
    },
    neutral: {
        //added this but not sure if it's correct
        800: {
            value:"#262626",
        },
        obsidian: {
            value: "#14182F",
        },
        night: {
            value: "#090C25",
        },
        midnight: {
            value: "#01041A",
        },
        white: {
            value: "#FFFFFF",
        },
        day: {
            value: "#FBFBFC",
        },
        fog: {
            value: "#F6F7FA",
        },
    },
    garden: {
        100: {
            value: "#CDFBF0",
        },
        200: {
            value: "#54FF77",
        },
        300: {
            value: "#04E8B0",
        },
        400: {
            value: "#2ABC48",
        },
        500: {
            value: "#11424A",
        },
    },
    ruby: {
        50: {
            value: "#FFE6EF",
        },
        100: {
            value: "#FFCCDF",
        },
        200: {
            value: "#FFB2D0",
        },
        300: {
            value: "#FF0057",
        },
        400: {
            value: "#651B48",
        },
        500: {
            value: "#4E1E44",
        },
    },
    atomic: {
        100: {
            value: "#FFE7D1",
        },
        200: {
            value: "#FF862F",
        },
        300: {
            value: "#C5735E",
        },
        400: {
            value: "#4E3935",
        },
    },
    lemon: {
        100: {
            value: "#FFFBC9",
        },
        200: {
            value: "#FFF36B",
        },
        300: {
            value: "#E8CE32",
        },
        400: {
            value: "#4E4A27",
        },
    },
    product: {
        alfred: {
            100: {
                value: "#E4D5FC",
            },
            200: {
                value: "#8D52EE",
            },
            300: {
                value: "#542CA2",
            },
        },
        analytics: {
            value: "#D83071",
        },
    },
    darkElement: {
        100: {
            value: "#22263C",
        },
        200: {
            value: "#29304B",
        },
        250: {
            value: "#636C89",
        },
        300: {
            value: "#676F88",
        },
        400: {
            value: "#9EA2BD",
        },
        500: {
            value: "#BCC0D9",
        },
    },
    lightElement: {
        100: {
            value: "#F3F5FA",
        },
        200: {
            value: "#DFE3EF",
        },
        300: {
            value: "#C4C8DF",
        },
        400: {
            value: "#A9ADCA",
        },
        500: {
            value: "#828AA4",
        },
    },
    turquoise: {
        100: {
            value: "#0AF5D8",
        },
    },
});
