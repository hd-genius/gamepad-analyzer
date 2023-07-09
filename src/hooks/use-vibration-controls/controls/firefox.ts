import { ControlGetter } from "./control-getter";
import { VibrationControls } from "./vibration-controls";

export const getControlsForFirefox: ControlGetter = (gamepad: Gamepad) => {
    const actuator = gamepad?.hapticActuators?.[0];

    return actuator ? new FirefoxVibrationControls(actuator) : null;
};

class FirefoxVibrationControls implements VibrationControls {
    constructor(private vibrationActuator: GamepadHapticActuator) {}
    start: () => void;
    stop: () => void;
}
