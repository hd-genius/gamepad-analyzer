import { GamepadContext } from "./contexts";
import { useState } from "react";
import { Toolbar, Analyzer, StatusIndicator } from "./components";
import { Analyzers } from "./constants";
import styles from "./app.module.scss";
import "./app.css";
import { useAllGamepads } from "./hooks";

export const App = () => {
    const gamepads = useAllGamepads();
    const [currentGamepadId, setCurrentGamepadId] = useState<string | null>(null);
    const [analyzerType, setAnalyzerType] = useState(Analyzers.BASIC);

    const hasGamepads = gamepads.length > 0;

    if (!hasGamepads) {
        return <StatusIndicator>No gamepads detected</StatusIndicator>
    }

    const isGamepadSelected = currentGamepadId !== null;

    return (
        <GamepadContext.Provider
            value={{
                id: currentGamepadId,
                selectGamepad: (id) => setCurrentGamepadId(id),
                selectAnalyzer: (type) => setAnalyzerType(type),
                analyzerType,
            }}
        >
            <div className={styles.appWrapper}>
                <Toolbar />
                <div className={styles.gamepadDisplay}>
                    {isGamepadSelected && <Analyzer />}
                    {!isGamepadSelected && <StatusIndicator>No gamepad selected</StatusIndicator>}
                </div>
            </div>
        </GamepadContext.Provider>
    );
};
