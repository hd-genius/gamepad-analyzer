import { createContext } from "react";
import { Analyzers } from "../constants";

export interface GamepadContextValue {
    id: string | null;
    selectGamepad: (id: string) => void;
    selectAnalyzer: (type: Analyzers) => void;
    analyzerType: Analyzers;
}

export const GamepadContext = createContext<GamepadContextValue>({
    id: "",
    selectGamepad: (id: string) => {},
    selectAnalyzer: (type: Analyzers) => {},
    analyzerType: Analyzers.BASIC,
});
