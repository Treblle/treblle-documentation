"use client";

import { forwardRef } from "react";

import { Box, styled } from "~styled-system/jsx";

import { useEventLogging } from "../../utils/use-event-logging.ts";
import { Spinner } from "./spinner.tsx";
import {
    Button as StyledButton,
    type ButtonProperties as StyledButtonProperties,
} from "./styled/button";

type ButtonLoadingProperties = {
    readonly loading?: boolean;
    readonly loadingText?: React.ReactNode;
};

type ButtonTrackingProperties = {
    readonly eventName?: string;
};

export type ButtonProperties = StyledButtonProperties &
    ButtonLoadingProperties &
    ButtonTrackingProperties;

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>((properties, reference) => {
    const { logEvent } = useEventLogging();

    const { loading, disabled, loadingText, children, eventName, onClick, ...rest } = properties;

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const trulyDisabled = disabled || loading;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (eventName) {
            logEvent(eventName);
        }

        if (onClick) onClick(event);
    };

    return (
        <StyledButton disabled={trulyDisabled} ref={reference} {...rest} onClick={handleClick}>
            {loading && !loadingText ? (
                <>
                    <ButtonSpinner />
                    <styled.span style={{ opacity: 0 }}>{children}</styled.span>
                </>
            ) : (
                (loadingText ?? children)
            )}
        </StyledButton>
    );
});

Button.displayName = "Button";

const ButtonSpinner = () => (
    <Box
        css={{
            display: "inline",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            insetStart: "50%",
            width: "16px",
            height: "16px",
        }}
    >
        <Spinner />
    </Box>
);
