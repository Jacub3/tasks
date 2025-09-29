import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [question, setQuestion] = useState<boolean>(false);

    function setVisible(): string {
        return question ? "42" : "";
    }

    return (
        <div>
            <Button
                onClick={() => {
                    setQuestion(!question);
                }}
            >
                Reveal Answer
            </Button>
            to {setVisible()}.
        </div>
    );
}
