import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Hanukkah"
    | "Thanksgiving"
    | "Easter";

const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Halloween: "🎃",
    Christmas: "🎄",
    Hanukkah: "🕎",
    Thanksgiving: "🦃",
    Easter: "🐣",
};

const ALPHABETICAL: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "Hanukkah",
    "Thanksgiving",
];

const YEARLY: Holiday[] = [
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Hanukkah",
    "Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");

    function cycleNextHoliday(order: Holiday[]) {
        const index = order.indexOf(holiday);
        const nextHoliday = order[(index + 1) % order.length];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <div>
                Cycle Holiday: {HOLIDAY_EMOJIS[holiday]} {holiday}
            </div>
            <Button
                onClick={() => {
                    cycleNextHoliday(ALPHABETICAL);
                }}
            >
                Next Alphabetical
            </Button>
            <Button
                onClick={() => {
                    cycleNextHoliday(YEARLY);
                }}
            >
                Next Yearly
            </Button>
        </div>
    );
}
