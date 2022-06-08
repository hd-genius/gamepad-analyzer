import { useGamepad } from "../useGamepad";

export const GamepadFrontView = ({index}) => {
    const gamepad = useGamepad(index);

    const bottomFaceButton = gamepad.buttons[0];
    const rightFaceButton = gamepad.buttons[1];
    const leftFaceButton = gamepad.buttons[2];
    const topFaceButton = gamepad.buttons[3];

    const selectButton = gamepad.buttons[8];
    const startButton = gamepad.buttons[9];

    const leftStickButton = gamepad.buttons[10];
    const rightStickButton = gamepad.buttons[11];

    const topDirectionButton = gamepad.buttons[12];
    const bottomDirectionButton = gamepad.buttons[13];
    const leftDirectionButton = gamepad.buttons[14];
    const rightDirectionButton = gamepad.buttons[15];

    const leftHorizontalAxis = gamepad.axes[0];
    const leftVerticalAxis = gamepad.axes[1];

    const rightHorizontalAxis = gamepad.axes[2];
    const rightVerticalAxis = gamepad.axes[3];

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <span>A &ndash; {bottomFaceButton.value}</span>
        <span>B &ndash; {rightFaceButton.value}</span>
        <span>X &ndash; {leftFaceButton.value}</span>
        <span>Y &ndash; {topFaceButton.value}</span>

        <span>Select &ndash; {selectButton.value}</span>
        <span>Start &ndash; {startButton.value}</span>

        <span>Left Stick &ndash; {leftStickButton.value}</span>
        <span>Right Stick &ndash; {rightStickButton.value}</span>

        <span>&uarr; &ndash; {topDirectionButton.value}</span>
        <span>&darr; &ndash; {bottomDirectionButton.value}</span>
        <span>&larr; &ndash; {leftDirectionButton.value}</span>
        <span>&rarr; &ndash; {rightDirectionButton.value}</span>

        <span>Left &ndash; {leftHorizontalAxis}, {leftVerticalAxis}</span>

        <span>Right &ndash; {rightHorizontalAxis}, {rightVerticalAxis}</span>
    </div>;
};
