"use client";

import { useStatsigClient } from "@statsig/react-bindings";

export function useEventLogging() {
    const { client } = useStatsigClient();

    function logEvent(eventName: string) {
        if (process.env.NODE_ENV !== "production") {
            console.log("Event logging:", eventName);
            return;
        }

        // Statsig logging

        client.logEvent(eventName);

        // Clarity logging
        // @ts-expect-error -- fix this later
        if (typeof globalThis !== "undefined" && globalThis.clarity) {
            // @ts-expect-error -- fix this later
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            globalThis.clarity("event", eventName);
        }
    }

    return { logEvent };
}
