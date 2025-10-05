import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    // Control
    function getAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    // check if it matches
    function isCorrect(answer: string): boolean {
        return answer === expectedAnswer;
    }

    // View
    return (
        <div>
            <Form.Group controlId="FormAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control value={answer} onChange={getAnswer} />
            </Form.Group>
            {answer !== "" && isCorrect(answer) ? "✔️" : "❌"}
        </div>
    );
}
