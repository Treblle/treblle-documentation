import tseslint from "typescript-eslint";
import {
    base,
    browser,
    next,
    react,
    tsTypecheckDisabled,
    tsTypechecked,
    prettier,
} from "./eslint.base.js";

export default tseslint.config(
    {
        ignores: [".next/**", "styled-system/**", "node_modules/**"],
    },
    {
        files: ["**/*.{ts,tsx}"],
        extends: [base, browser, react, next, tsTypechecked],
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.js"],
        extends: [tsTypecheckDisabled],
    },
    prettier
);
