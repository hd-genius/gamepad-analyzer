import { createContext } from "react";

export const GamepadContext = createContext({
    id: "",
    selectGamepad: () => {},
    selectAnalyzer: () => {},
});