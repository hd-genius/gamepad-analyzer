import { useGamepad } from "../useGamepad/useGamepad";
import { VibrationActuatorType, VibrationActuator} from "../../domain/vibrationActuator";

function findVibrationActuators(gamepad: Gamepad): {[Property in VibrationActuatorType]?: VibrationActuator} {
    if (gamepad.vibrationActuator) {
        // used for chromium
        return {};
    } else if (gamepad.hapticActuators) {
        // used for firefox
        return {};
    } else {
        return {};
    }
}

export function useVibrationActuator(actuator: VibrationActuatorType): VibrationActuator | null {
    const gamepad = useGamepad() as Gamepad;

    return findVibrationActuators(gamepad)[actuator] ?? null;
};
