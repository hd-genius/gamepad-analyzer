import { BasicAnalyzer } from "./basic-analyzer"
import { GamepadContext } from "../contexts";
import { useState } from "react";
import { useAllGamepads } from "../hooks";
import { Toolbar } from "./toolbar";
import { Analyzers } from "../constants";
import { JoystickAnalyzer } from "./joystick-analyzer";

export const GamepadDisplay = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState(null);
    const [analyzerType, setAnalyzerType] = useState(Analyzers.BASIC);

    const hasGamepadConnected = gamepads.length > 0;

    if (hasGamepadConnected) {
        const AnalyzerComponent = resolveAnalyzer(analyzerType);
        console.log(AnalyzerComponent.name);
        return <GamepadContext.Provider value={{
            id: currentGamepadId,
            selectGamepad: id => setCurrentGamepadId(id),
            selectAnalyzer: type => setAnalyzerType(type),
            analyzerType,
        }}>
            <Toolbar />
            {currentGamepadId !== null && <AnalyzerComponent />}
        </GamepadContext.Provider>;
    } else {
        return <span>No gamepads detected.</span>
    }
};

const resolveAnalyzer = type => {
    switch (type) {
        case Analyzers.BASIC:
            return BasicAnalyzer;
        case Analyzers.JOYSTICK:
            return JoystickAnalyzer;
        default:
            return BasicAnalyzer;
    }
};
