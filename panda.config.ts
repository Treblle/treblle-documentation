import { defineConfig } from "@pandacss/dev";

import { semanticTokens } from "./theme/semantic-tokens";
import { textStyles } from "./theme/text-styles";
import { tokens } from "./theme/tokens";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}", "./mdx-components.tsx"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            semanticTokens,
            tokens,
            textStyles,
        },
    },

    // The output directory for your css system
    outdir: "styled-system",

    jsxFramework: "react",
    jsxStyleProps: "minimal",
});
