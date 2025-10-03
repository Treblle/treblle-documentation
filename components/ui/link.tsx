"use client";

import NextLink from "next/link";
import React, { forwardRef } from "react";

import { useEventLogging } from "../../utils/use-event-logging";

type LinkProperties = React.ComponentProps<typeof NextLink> & {
    readonly eventName?: string | undefined;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProperties>(
    ({ eventName, onClick, ...properties }, reference) => {
        const { logEvent } = useEventLogging();

        const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (eventName) {
                logEvent(eventName);
            }

            if (onClick) {
                onClick(event);
            }
        };

        return <NextLink {...properties} ref={reference} passHref onClick={handleClick} />;
    }
);

Link.displayName = "Link";
