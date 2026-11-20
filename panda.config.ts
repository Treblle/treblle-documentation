import { defineConfig } from "@pandacss/dev";

import { recipes } from "./theme/recipes";
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

    // Presets are explicit in v2 — preset-base must be listed to get utilities, conditions and patterns
    presets: ["@pandacss/preset-base"],

    // Useful for theme customization
    theme: {
        extend: {
            semanticTokens,
            tokens,
            textStyles,
            recipes,
        },
    },

    // The output directory for your css system
    outdir: "styled-system",

    jsxFramework: "react",
    jsxStyleProps: "minimal",
    outExtension: "js",
    forceImportExtension: true,
});
