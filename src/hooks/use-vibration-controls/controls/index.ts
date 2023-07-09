import "./control-getter";
import { getControlsForFirefox } from "./firefox";
import { getControlsForChromium } from "./chromium";
export type { VibrationControls } from "./vibration-controls";

export const possibleGetters = [getControlsForChromium, getControlsForFirefox];
