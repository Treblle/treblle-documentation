"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

import { Answer } from "./faq-answer";

type QuestionProperties = {
    readonly question?: string;
    readonly children?: React.ReactNode;
};

export function FAQItem({ question, children }: QuestionProperties) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box
            className={css({
                width: "100%",
                height: "auto",
                backgroundImage: isOpen
                    ? "linear-gradient(to left, rgba(1, 4, 26, 0), #14182f)"
                    : "transparent",
                borderY: "1px solid #29304b",
                padding: "24px",
            })}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <Box
                className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                })}
            >
                <h3
                    className={css({
                        fontSize: "20px",
                    })}
                >
                    {question}
                </h3>

                <ChevronDown
                    className={css({
                        transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "transform 0.5s ease",
                    })}
                />
            </Box>

            <Answer isOpen={isOpen}>{children}</Answer>
        </Box>
    );
}
