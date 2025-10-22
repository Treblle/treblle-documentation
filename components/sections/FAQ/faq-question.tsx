"use client";
import { ChevronDown } from 'lucide-react';
import { useState } from "react";

import { css } from "~styled-system/css";
import { Box } from "~styled-system/jsx";

type QuestionProperties = {
    readonly question: string;
    readonly answer: string;
};

export function Question({ question, answer }: QuestionProperties) {
    const [isOpen, setIsOpen] = useState(true);


    return <Box className={css({
            width: "100%",
            backgroundImage: isOpen ? "linear-gradient(to left, rgba(1, 4, 26, 0), #14182f)":"transparent",
            borderY: "1px solid #29304b",
            padding:"24px",
        })}>
            <Box className={css({
                display:"flex",
                justifyContent: "space-between",
                alignItems: "center",
            })}>
                <h3 className={css({
                    fontSize: "20px",
                })}>{question}</h3>
                <button onClick={() => { setIsOpen(!isOpen); }}>
                    <ChevronDown className={css({
                        transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "transform 0.5s ease",
                    })}/>
                </button>
            </Box>

            <p className={css({
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0,
                userSelect: isOpen ? "auto" : "none",
                visibility: isOpen ? "visible" : "hidden",
                color: "darkElement.400",
                transform: isOpen ? "translateY(0px)" : "translateY(-10px)",
                marginTop: isOpen ? "24px" : "0px",
                fontSize: "14px",
                transition: "all 0.4s ease",
            })}>{answer}</p>
        </Box>
}