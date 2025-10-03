"use client";

import { useStatsigClient } from "@statsig/react-bindings";


export function useEventLogging() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const { client } = useStatsigClient();

    function logEvent(eventName: string) {
        if (process.env.NODE_ENV !== "production") {
            console.log("Event logging:", eventName);
            return;
        }

        // Statsig logging
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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
