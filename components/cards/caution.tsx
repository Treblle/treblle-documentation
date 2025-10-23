import { TriangleAlert } from "lucide-react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { InfoCard } from "./info-card";

export function CautionCard({ children }: { readonly children: React.ReactNode }) {
    return (
        <InfoCard type="caution">
            <Box
                className={css({
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                })}
            >
                <TriangleAlert
                    size={16}
                    className={css({
                        color: "atomic.200",
                    })}
                />
                <h1
                    className={css({
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "atomic.200",
                    })}
                >
                    Caution
                </h1>
            </Box>
            {children}
        </InfoCard>
    );
}
