"use client";

import { StatsigProvider } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import React, { useEffect, useState } from "react";

export default function MyStatsig({ children }: { readonly children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Render children without Statsig on server to prevent hydration issues
    if (!isClient) {
        return <>{children}</>;
    }

    return (
        <StatsigProvider
            sdkKey={process.env["NEXT_PUBLIC_STATSIG_CLIENT_KEY"] ?? ""}
            user={{}}
            options={{
                plugins: [
                    // @ts-expect-error -- their plugins aren't typed correctly
                    new StatsigAutoCapturePlugin(),
                ],
            }}
            waitForInitialization={false}
        >
            {children}
        </StatsigProvider>
    );
}