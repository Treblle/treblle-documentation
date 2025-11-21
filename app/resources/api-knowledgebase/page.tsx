"use client";

import { useEffect } from "react";

export default function TrustCenter() {
    useEffect(() => {
        globalThis.location.href = "https://treblle.com/knowledgebase";
    }, []);

    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh",
            flexDirection: "column",
            gap: "16px"
        }}>
        </div>
    );
}