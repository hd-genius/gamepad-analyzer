import { useContext } from "react";
import { Analyzers } from "../../constants";
import { GamepadContext } from "../../contexts";
import { BasicAnalyzer } from "./basic-analyzer";
import { JoystickAnalyzer } from "./joystick-analyzer";
import { TriggerAnalyzer } from "./trigger-analyzer";

export const Analyzer = () => {
    const { analyzerType } = useContext(GamepadContext);

    switch (analyzerType) {
        case Analyzers.BASIC:
            return <BasicAnalyzer />;
        case Analyzers.JOYSTICK:
            return <JoystickAnalyzer />;
        case Analyzers.TRIGGER:
            return <TriggerAnalyzer />;
    }
}