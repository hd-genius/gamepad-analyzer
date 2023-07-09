import { ControlGetter } from "./control-getter";
import { VibrationControls } from "./vibration-controls";

export const getControlsForChromium: ControlGetter = (gamepad: Gamepad) => {
    const actuator = gamepad?.vibrationActuator;

    return actuator ? new ChromiumVibrationControls(actuator) : null;
};

class ChromiumVibrationControls implements VibrationControls {
    constructor(private vibrationActuator: GamepadHapticActuator) {}
    start: () => void;
    stop: () => void;
}
