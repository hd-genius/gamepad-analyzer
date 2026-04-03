import { useState, useEffect } from "react";

export function useAllGamepads(): Gamepad[] {
    const [gamepads, setGamepads] = useState<Gamepad[]>([]);

    useEffect(() => {
        const updateControllers = () => {
            const connectedGamepads = navigator.getGamepads().filter((x) => x);
            setGamepads(connectedGamepads as Gamepad[]);
        };

        updateControllers();

        window.addEventListener("gamepadconnected", updateControllers);
        window.addEventListener("gamepaddisconnected", updateControllers);

        return () => {
            window.removeEventListener("gamepadconnected", updateControllers);
            window.removeEventListener(
                "gamepaddisconnected",
                updateControllers
            );
        };
    }, []);

    return gamepads;
};
