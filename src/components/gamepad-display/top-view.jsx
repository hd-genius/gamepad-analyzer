import { useGamepad } from "../../hooks";
import {
    LEFT_SHOULDER,
    RIGHT_SHOULDER,
    LEFT_TRIGGER,
    RIGHT_TRIGGER,
} from "../../constants";

export const GamepadTopView = ({gamepadId}) => {
    const gamepad = useGamepad(gamepadId);

    const leftBumperButton = gamepad.buttons[LEFT_SHOULDER];
    const rightBumperButton = gamepad.buttons[RIGHT_SHOULDER];

    const leftTrigger = gamepad.buttons[LEFT_TRIGGER];
    const rightTrigger = gamepad.buttons[RIGHT_TRIGGER];

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <span>LB &ndash; {leftBumperButton.value}</span>
        <span>RB &ndash; {rightBumperButton.value}</span>

        <span>LT &ndash; {leftTrigger.value}</span>
        <span>RT &ndash; {rightTrigger.value}</span>
    </div>;
};
