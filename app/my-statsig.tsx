"use client";

import { StatsigProvider } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import React from "react";

export default function MyStatsig({ children }: { readonly children: React.ReactNode }) {
    return (
        <StatsigProvider
            sdkKey={process.env["NEXT_PUBLIC_STATSIG_CLIENT_KEY"] ?? ""}
            user={{}}
            options={{
                plugins: [
                    // @ts-expect-error -- their plugins aren't typed correctly
                    new StatsigAutoCapturePlugin(),
                    // @ts-expect-error -- their plugins aren't typed correctly
                    new StatsigAutoCapturePlugin(),
                ],
            }}
        >
            {children}
        </StatsigProvider>
    );
}
