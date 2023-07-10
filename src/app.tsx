import { GamepadContext } from "./contexts";
import { useState } from "react";
import { useAllGamepads } from "./hooks";
import { Toolbar, Analyzer, StatusIndicator } from "./components";
import { Analyzers } from "./constants";
import styles from "./gamepad-display.module.css";
import "./app.css";

export const App = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState(null);
    const [analyzerType, setAnalyzerType] = useState(Analyzers.BASIC);

    const hasGamepadConnected = gamepads.length > 0;

    if (hasGamepadConnected) {
        return (
            <GamepadContext.Provider
                value={{
                    id: currentGamepadId,
                    selectGamepad: (id) => setCurrentGamepadId(id),
                    selectAnalyzer: (type) => setAnalyzerType(type),
                    analyzerType,
                }}
            >
                <div className={styles.gamepadDisplay}>
                    <Toolbar />
                    {currentGamepadId !== null && <Analyzer />}
                </div>
            </GamepadContext.Provider>
        );
    } else {
        return <StatusIndicator>No gamepads detected</StatusIndicator>;
    }
};
