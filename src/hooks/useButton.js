import { useGamepad } from "./useGamepad";

export const useButton = (button) => {
    const gamepad = useGamepad();
    return gamepad.buttons[button];
};
