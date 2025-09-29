import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    // Mulligan
    function plusAttempts(): number {
        return attempts + 1;
    }

    // uses attempts
    function minusAttempts(): number {
        return attempts - 1;
    }

    // started/ended progress
    function isProgress(): boolean {
        return !progress;
    }

    return (
        <div>
            Attempts: {attempts}
            <Button
                disabled={progress || attempts <= 0}
                onClick={() => {
                    setProgress(isProgress);
                    setAttempts(minusAttempts);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={progress}
                onClick={() => {
                    setAttempts(plusAttempts);
                }}
            >
                Mulligan
            </Button>
            <Button
                disabled={!progress}
                onClick={() => {
                    setProgress(isProgress);
                }}
            >
                Stop Quiz
            </Button>
        </div>
    );
}
