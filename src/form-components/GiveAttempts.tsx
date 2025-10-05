import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function useButton() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainButton() {
        const gainAmount = parseInt(request);
        if (!isNaN(gainAmount)) {
            setAttempts(attempts + gainAmount);
        }
        // else: do nothing if invalid input
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="Attemptnumber">
                <Form.Label>Number Of Attempts left</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useButton} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={gainButton}>gain</Button>
        </div>
    );
}
