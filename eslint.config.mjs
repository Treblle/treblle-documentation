import tseslint from "typescript-eslint";
import {
    base,
    browser,
    next,
    react,
    tsTypecheckDisabled,
    tsTypechecked,
    prettier,
} from "@treblle/eslint-config";

export default tseslint.config(
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
