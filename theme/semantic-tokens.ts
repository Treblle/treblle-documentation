import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
    colors: {
        bg: {
            default: {
                value: {
                    base: "{colors.neutral.fog}",
                    _osLight: "{colors.neutral.fog}",
                    _light: "{colors.neutral.fog}",
                    _osDark: "{colors.neutral.midnight}",
                    _dark: "{colors.neutral.midnight}",
                },
            },
        },
        fg: {
            default: {
                value: {
                    base: "{colors.neutral.midnight}",
                    _osLight: "{colors.neutral.midnight}",
                    _light: "{colors.neutral.midnight}",
                    _osDark: "{colors.neutral.white}",
                    _dark: "{colors.neutral.white}",
                },
            },
            muted: {
                value: {
                    base: "{colors.lightElement.400}",
                    _osLight: "{colors.lightElement.400}",
                    _light: "{colors.lightElement.400}",
                    _osDark: "{colors.darkElement.400}",
                    _dark: "{colors.darkElement.400}",
                },
            },
        },
    },
});
