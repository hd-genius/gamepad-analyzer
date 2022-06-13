import { createContext } from "react";
import { Analyzers } from "../constants";

export const GamepadContext = createContext({
  id: "",
  selectGamepad: () => {},
  selectAnalyzer: () => {},
  analyzerType: Analyzers.BASIC,
});
