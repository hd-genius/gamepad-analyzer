import { BasicAnalyzer } from "./basic-analyzer/basic-analyzer"
import { GamepadContext } from "../contexts";
import { useEffect, useState } from "react";
import { useAllGamepads } from "../hooks";

export const GamepadDisplay = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState(null);

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
    }, [gamepads. currentGamepadId]);

    const connectedGamepads = gamepads.filter(x => x);

    const hasGamepadConnected = connectedGamepads.length > 0;

    if (hasGamepadConnected) {
        const isGamepadSelected = currentGamepadId !== null;

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
