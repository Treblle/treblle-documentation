import { forwardRef } from "react";

import { styled } from "~styled-system/jsx";

import {
    Spinner as StyledSpinner,
    type SpinnerProperties as StyledSpinnerProperties,
} from "./styled/spinner";

export type SpinnerProperties = {
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     * @default "Loading..."
     */
    readonly label?: string;
} & StyledSpinnerProperties;

export const Spinner = forwardRef<HTMLDivElement, SpinnerProperties>((properties, reference) => {
    const { label = "Loading...", ...rest } = properties;

    return (
        <StyledSpinner ref={reference} {...rest}>
            {label && <styled.span css={{ opacity: 0 }}>{label}</styled.span>}
        </StyledSpinner>
    );
});

Spinner.displayName = "Spinner";
