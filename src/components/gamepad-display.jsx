import { BasicAnalyzer } from "./basic-analyzer/basic-analyzer"
import { GamepadContext } from "../contexts";
import { useState } from "react";
import { useAllGamepads } from "../hooks";
import { Toolbar } from "./toolbar";

export const GamepadDisplay = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState(null);

    const hasGamepadConnected = gamepads.length > 0;

    if (hasGamepadConnected) {
        const isGamepadSelected = currentGamepadId !== null;

        return <GamepadContext.Provider value={{
            id: currentGamepadId,
            selectGamepad: id => setCurrentGamepadId(id),
        }}>
            <Toolbar />
            {isGamepadSelected && <BasicAnalyzer />}
        </GamepadContext.Provider>;
    } else {
        return <span>No gamepads detected.</span>
    }

};
