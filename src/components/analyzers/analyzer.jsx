import { lazy, Suspense } from "react";
import { useContext } from "react";
import { Analyzers } from "../../constants";
import { GamepadContext } from "../../contexts";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";

const BasicAnalyzer = lazy(() => import("./basic-analyzer"));
const JoystickAnalyzer = lazy(() => import("./joystick-analyzer"));
const TriggerAnalyzer = lazy(() => import("./trigger-analyzer"));

export const Analyzer = () => {
    const { analyzerType } = useContext(GamepadContext);

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <AnalyzerResolver type={analyzerType} />
        </Suspense>
    );
};

const AnalyzerResolver = ({ type }) => {
    switch (type) {
        case Analyzers.BASIC:
            return <BasicAnalyzer />;
        case Analyzers.JOYSTICK:
            return <JoystickAnalyzer />;
        case Analyzers.TRIGGER:
            return <TriggerAnalyzer />;
        default:
            return null;
    }
};
