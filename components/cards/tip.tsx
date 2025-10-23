import { Rocket } from "lucide-react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { InfoCard } from "./info-card";

export function TipCard({ children }: { readonly children: React.ReactNode }) {
    return (
        <InfoCard type="tip">
            <Box
                className={css({
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                })}
            >
                <Rocket
                    size={16}
                    className={css({
                        color: "garden.300",
                    })}
                />
                <h1
                    className={css({
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "garden.300",
                    })}
                >
                    Tip
                </h1>
            </Box>
            {children}
        </InfoCard>
    );
}
