import { defineTokens } from "@pandacss/dev";

import { colors } from "./colors";

const fonts = defineTokens.fonts({
    heading: {
        value: "'Poppins', sans-serif",
        description: "Used for H1-H6",
    },
    body: {
        value: "'Inter Variable', sans-serif",
        description: "Used for body text",
    },
    code: {
        value: "'Roboto Mono Variable', monospace",
        description: "Used only for code blocks and snippets in product UI",
    },
});

const fontWeights = defineTokens.fontWeights({
    sm: {
        value: 300,
        description: "Font weight light/300",
    },
    md: {
        value: 400,
        description: "Font weight regular/400",
    },
    lg: {
        value: 500,
        description: "Font weight medium/500",
    },
    xl: {
        value: 600,
        description: "Font weight semi-bold/600",
    },
    "2xl": {
        value: 700,
        description: "Font weight bold/700",
    },
    "3xl": {
        value: 800,
        description: "Font weight extra-bold/800",
    },
});

const fontSizes = defineTokens.fontSizes({
    "3xs": {
        value: "0.5rem",
        description: "8px",
    },
    "2xs": {
        value: "0.625rem",
        description: "10px",
    },
    xs: {
        value: "0.75rem",
        description: "12px",
    },
    sm: {
        value: "0.875rem",
        description: "14px",
    },
    md: {
        value: "1rem",
        description: "16px",
    },
    lg: {
        value: "1.125rem",
        description: "18px",
    },
    xl: {
        value: "1.25rem",
        description: "20px",
    },
    "2xl": {
        value: "1.5rem",
        description: "24px",
    },
    "3xl": {
        value: "1.625rem",
        description: "26px",
    },
    "4xl": {
        value: "1.875rem",
        description: "30px",
    },
    "5xl": {
        value: "2rem",
        description: "32px",
    },
    "6xl": {
        value: "2.25rem",
        description: "36px",
    },
    "7xl": {
        value: "2.375rem",
        description: "38px",
    },
});

const easings = defineTokens.easings({
    pulse: { value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)" },
    default: { value: "cubic-bezier(0.2, 0.0, 0, 1.0)" },
    "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)" },
    "emphasized-out": { value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)" },
});

const animations = defineTokens.animations({
    "backdrop-in": {
        value: "fade-in 250ms {easings.emphasized-in}",
    },
    "backdrop-out": {
        value: "fade-out 200ms {easings.emphasized-out}",
    },
    "dialog-in": {
        value: "slide-in 400ms {easings.emphasized-in}",
    },
    "dialog-out": {
        value: "slide-out 200ms {easings.emphasized-out}",
    },
    marquee: {
        value: "marquee 60s linear infinite",
    },
    "marquee-vertical": {
        value: "marquee-vertical 60s linear infinite",
    },
});

export const tokens = defineTokens({
    fontSizes,
    fontWeights,
    fonts,
    colors,
    easings,
    animations,
});
