"use client";

export function useEventLogging() {
    function logEvent(eventName: string) {
        if (process.env.NODE_ENV !== "production") {
            console.log("Event logging:", eventName);
            return;
        }

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
