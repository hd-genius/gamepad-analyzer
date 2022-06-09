import { useGamepad } from "../useGamepad";

export const GamepadTopView = ({gamepadId}) => {
    const gamepad = useGamepad(gamepadId);

    const leftBumperButton = gamepad.buttons[4];
    const rightBumperButton = gamepad.buttons[5];

    const leftTrigger = gamepad.buttons[6];
    const rightTrigger = gamepad.buttons[7];

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
