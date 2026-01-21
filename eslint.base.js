//@ts-check
import eslint from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const base = tseslint.config({
    name: "Base",
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    linterOptions: {
        reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
        globals: globals.builtin,
        sourceType: "module",
        ecmaVersion: "latest",
        parserOptions: {
            sourceType: "module",
            ecmaVersion: "latest",
        },
    },
    plugins: {
        unicorn: eslintPluginUnicorn,
        "simple-import-sort": simpleImportSort,
    },
    rules: {
        ...eslint.configs.recommended.rules,
        ...eslintPluginUnicorn.configs["flat/recommended"].rules,
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unicorn/better-regex": "warn",
        "unicorn/filename-case": [
            "error",
            {
                cases: {
                    camelCase: false,
                    pascalCase: false,
                    kebabCase: true,
                    snakeCase: false,
                },
            },
        ],
    },
});

const browser = tseslint.config({
    name: "Browser",
    languageOptions: {
        globals: globals.browser,
    },
});

const node = tseslint.config({
    name: "Node",
    languageOptions: {
        globals: globals.node,
    },
});

const react = tseslint.config({
    name: "React",
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    plugins: {
        react: reactPlugin,
        // @ts-expect-error - types are wrong
        "react-hooks": reactHooks,
        "jsx-a11y": jsxA11y,
    },
    // @ts-expect-error - types are wrong
    rules: {
        ...reactPlugin.configs.flat?.["recommended"].rules,
        ...reactPlugin.configs.flat?.["jsx-runtime"].rules,
        ...reactHooks.configs.recommended.rules,
        ...jsxA11y.flatConfigs.strict.rules,
        "react/prefer-read-only-props": "error",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
});

const next = tseslint.config({
    name: "Next.Js",
    plugins: {
        "@next/next": pluginNext,
    },
    // @ts-expect-error - types are wrong
    rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs["core-web-vitals"].rules,
    },
});

const tsTypechecked = tseslint.config({
    name: "Typescript-Typechecked",
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
        parserOptions: {
            project: true,
        },
    },
    rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/array-type": [
            "error",
            {
                readonly: "generic",
                default: "generic",
            },
        ],
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                fixStyle: "separate-type-imports",
                disallowTypeAnnotations: true,
            },
        ],
        "@typescript-eslint/consistent-type-exports": [
            "error",
            {
                fixMixedExportsWithInlineTypeSpecifier: false,
            },
        ],
    },
});

const tsTypecheckDisabled = tseslint.config({
    name: "Typescript-Typecheck Disabled",
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
});

const prettier = tseslint.config({
    ...eslintConfigPrettier,
    name: "Prettier",
});

export { base, browser, next, node, prettier, react, tsTypecheckDisabled, tsTypechecked };