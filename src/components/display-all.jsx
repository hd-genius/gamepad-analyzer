import { useEffect, useState } from "react";
import { GamepadDisplay } from "./gamepad-display/gamepad-display";

export const DisplayAll = () => {
    const [gamepads, setGamepads] = useState([]);

    useEffect(() => {
        const updateControllers = () => {
            setGamepads(navigator.getGamepads());
        };
        
        updateControllers();
        const connectedListener = window.addEventListener("gamepadconnected", updateControllers);
        const unconnectedListener = window.addEventListener("gamepaddisconnected", updateControllers);

        return () => {
            window.removeEventListener("gamepadconnected", connectedListener);
            window.removeEventListener("gamepaddisconnected", unconnectedListener);
        };
    }, []);

    return gamepads.filter(x => x).map((x) => <GamepadDisplay key={x.id} gamepadId={x.id} />);
};