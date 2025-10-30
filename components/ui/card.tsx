"use client"

import { forwardRef } from "react";

import { Card as StyledCard, type CardProperties as StyledCardProperties } from "./styled/card";

export type CardProperties = StyledCardProperties;

export const Card = forwardRef<HTMLDivElement, CardProperties>((properties, reference) => {
    return <StyledCard ref={reference} {...properties} />;
});

Card.displayName = "Card";