import { Info } from "lucide-react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { InfoCard } from "./info-card";

export function NoteCard({ children }: { readonly children: React.ReactNode }) {
    return (
        <InfoCard type="note">
            <Box
                className={css({
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "18px",
                })}
            >
                <Info
                    size={16}
                    className={css({
                        color: "electric.200",
                    })}
                />
                <h1
                    className={css({
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "electric.200",
                    })}
                >
                    Note
                </h1>
            </Box>
            <p className={css({ marginTop: "0" })}>{children}</p>
        </InfoCard>
    );
}
