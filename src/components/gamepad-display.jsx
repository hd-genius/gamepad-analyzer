import { BasicAnalyzer } from "./basic-analyzer/basic-analyzer"
import { GamepadContext } from "../contexts";
import { useEffect, useState } from "react";

export const GamepadDisplay = () => {
    const [gamepads, setGamepads] = useState([]);
    const [currentGamepadId, setCurrentGamepadId] = useState(null);

    useEffect(() => {
        const updateControllers = () => {
            const connectedGamepads = navigator.getGamepads().filter(x => x);
            setGamepads(connectedGamepads);
        };

        updateControllers();
        window.addEventListener("gamepadconnected", updateControllers);
        window.addEventListener("gamepaddisconnected", updateControllers);

        return () => {
            window.removeEventListener("gamepadconnected", updateControllers);
            window.removeEventListener("gamepaddisconnected", updateControllers);
        };
    }, []);

    useEffect(() => {
        const connectedGamepads = gamepads.filter(x => x);
        const isGamepadStillConnected = !connectedGamepads.map(x => x.id).includes(currentGamepadId);
        if (isGamepadStillConnected) {
            if (connectedGamepads.length) {
                setCurrentGamepadId(connectedGamepads[0].id);
            } else {
                setCurrentGamepadId(null);
            }
        }
    }, [gamepads]);

    const isGamepadSelected = currentGamepadId !== null;

    const connectedGamepads = gamepads.filter(x => x);

    const hasGamepadConnected = connectedGamepads.length > 0;

    if (hasGamepadConnected) {
        return <GamepadContext.Provider value={{ id: currentGamepadId }}>
            <select onChange={e => setCurrentGamepadId(e.target.value)}>
                {connectedGamepads.map(gamepad => <option value={gamepad.id} key={gamepad.id}>Gamepad {gamepad.index}</option>)}
            </select>
            {isGamepadSelected && <BasicAnalyzer />}
        </GamepadContext.Provider>;
    } else {
        return <span>No gamepads detected.</span>
    }

};
