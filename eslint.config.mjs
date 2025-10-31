import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Add your custom rules here
            "@typescript-eslint/no-unused-vars": ["warn", { 
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_" 
            }],
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
        extends: [tseslint.configs.disableTypeChecked],
    },
    {
        ignores: [
            "node_modules",
            ".next",
            "out",
            "styled-system",
            "public/_pagefind",
            "*.config.js",
            "*.config.mjs",
        ],
    }
);