import { createContext } from "react";
import { Analyzers } from "../domain";

export interface GamepadContextValue {
    id: string | null;
    selectGamepad: (id: string | null) => void;
    selectAnalyzer: (type: Analyzers) => void;
    analyzerType: Analyzers;
}

export const GamepadContext = createContext<GamepadContextValue>({
    id: "",
    selectGamepad: (id: string | null) => {},
    selectAnalyzer: (type: Analyzers) => {},
    analyzerType: Analyzers.BASIC,
});
