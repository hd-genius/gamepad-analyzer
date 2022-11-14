import { render, screen } from "@testing-library/react";
import { BasicAnalyzer } from "./basic-analyzer";
import { useButton, useJoystick } from "../../../hooks";
import { Buttons } from "../../../constants";
import styles from "../drawing.module.css";

jest.mock("../../../hooks");

describe("BasicAnalyzer", () => {
    beforeEach(() => {
        useButton.mockReset();
        useButton.mockReturnValue({});

        useJoystick.mockReset();
        useJoystick.mockReturnValue({});
    });

    it.each([
        ["bottom face button", Buttons.BOTTOM_FACE, "bottom-face-button"],
        ["right face button", Buttons.RIGHT_FACE, "right-face-button"],
        ["left face button", Buttons.LEFT_FACE, "left-face-button"],
        ["top face button", Buttons.TOP_FACE, "top-face-button"],
        ["select button", Buttons.SELECT, "select-button"],
        ["start button", Buttons.START, "start-button"],
        ["left shoulder", Buttons.LEFT_SHOULDER, "left-shoulder"],
        ["right shoulder", Buttons.RIGHT_SHOULDER, "right-shoulder"],
        ["left trigger", Buttons.LEFT_TRIGGER, "left-trigger"],
        ["right trigger", Buttons.RIGHT_TRIGGER, "right-trigger"],
        ["left stick", Buttons.LEFT_STICK, "left-stick"],
        ["right stick", Buttons.RIGHT_STICK, "right-stick"],
    ])("should show when the %s is pressed", (name, index, testId) => {
        useButton.mockImplementation((button) =>
            button === index
                ? {
                      pressed: true,
                  }
                : {}
        );
        render(<BasicAnalyzer />);
        expect(screen.getByTestId(testId)).toHaveClass(styles.pressed);
    });

    it.todo("should show when the up directional button is pressed");

    it.todo("should show when the right directional button is pressed");

    it.todo("should show when the down directional button is pressed");

    it.todo("should show when the left directional button is pressed");
});
