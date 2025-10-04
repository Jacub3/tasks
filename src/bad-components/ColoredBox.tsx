import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    nextColor: () => void;
}

function ChangeColor({ nextColor }: ChangeColorProps): React.JSX.Element {
    return <Button onClick={nextColor}>Next Color</Button>;
}

interface ColorPreviewProps {
    color: string;
}

function ColorPreview({ color }: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const currentColor = COLORS[colorIndex];

    function nextColor() {
        setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor nextColor={nextColor} />
                <ColorPreview color={currentColor} />
            </div>
        </div>
    );
}
