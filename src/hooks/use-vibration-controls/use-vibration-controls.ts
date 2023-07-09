import { useGamepad } from "../useGamepad";
import { VibrationControls, possibleGetters } from "./controls";

export const useVibrationControls: () => VibrationControls = () => {
    const gamepad = useGamepad() as Gamepad;

    for (const getter of possibleGetters) {
        const result = getter(gamepad);
        if (result) {
            return result;
        }
    }

    return { start: () => {}, stop: () => {} }; // TODO: throw support error
};
