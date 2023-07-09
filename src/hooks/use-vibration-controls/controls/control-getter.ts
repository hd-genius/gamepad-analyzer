import { VibrationControls } from "./vibration-controls";

export type ControlGetter = (gamepad: Gamepad) => VibrationControls | null;
