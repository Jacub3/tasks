import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [firstD6, setfD6] = useState<number>(1);
    const [secondD6, setsD6] = useState<number>(2);

    const match = firstD6 === secondD6;
    const snakeEye = firstD6 == 1 && secondD6 == 1;
    return (
        <div>
            Two Dice
            <span data-testid="right-die">{firstD6}</span>
            <span data-testid="left-die">{secondD6}</span>
            <Button
                onClick={() => {
                    setfD6(d6);
                }}
            >
                Roll Right
            </Button>
            <Button
                onClick={() => {
                    setsD6(d6);
                }}
            >
                Roll Left
            </Button>
            <span>
                {snakeEye ?
                    "Lose"
                : match ?
                    "Win"
                :   "Lose"}
            </span>
        </div>
    );
}
