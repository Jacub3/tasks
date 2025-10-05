import React, { useState } from "react";
import Form from "react-bootstrap/Form";

type Color =
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "violet"
    | "crimson";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<Color>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value as Color);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label="Red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label="Orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label="Yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="Green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-indigo"
                label="Indigo"
                value="indigo"
                checked={color === "indigo"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-violet"
                label="Violet"
                value="violet"
                checked={color === "violet"}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-crimson"
                label="Crimson"
                value="crimson"
                checked={color === "crimson"}
            />
            <div>You have choosen {color}.</div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "30px",
                    border: "1px solid black",
                    marginTop: "10px",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "30px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
