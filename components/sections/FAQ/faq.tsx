import { Box } from "~styled-system/jsx";

import { Question } from "./faq-question";

type FAQProperties = {
    readonly questions: Array<[question: string, answer: string]>;
};

export function FAQ({ questions }: FAQProperties) {
    return <Box>
        {questions.map(([question, answer]) => (
            <Question key={question} question={question} answer={answer} />
        ))}
    </Box>;
}