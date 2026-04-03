import { Buttons } from "../../domain";
import { useGamepad } from "../useGamepad";

export const useButton = (button: Buttons) => {
    const gamepad = useGamepad();
    return gamepad.buttons[button];
};
