declare module "*.module.css";
declare module "*.module.scss";

interface Gamepad extends Gamepad {
    vibrationActuator?: GamepadHapticActuator;
}

interface GamepadHapticActuator extends GamepadHapticActuator {
    pulse: (value, duration) => void;
}
