import { BasicAnalyzer } from "./basic-analyzer/basic-analyzer"
import { GamepadContext } from "../contexts";

export const GamepadDisplay = ({ gamepadId }) => {
    return <GamepadContext.Provider value={{ id: gamepadId }}>
        <BasicAnalyzer />
    </GamepadContext.Provider>
}