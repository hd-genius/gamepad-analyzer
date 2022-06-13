import { useGamepad } from "./useGamepad";

export const useJoystick = (index) => {
    const gamepad = useGamepad();
    const firstAxis = index * 2;
    return {
        x: gamepad.axes[firstAxis],
        y: gamepad.axes[firstAxis + 1],
    };
};
