import { render, screen } from "@testing-library/react";
import { BasicAnalyzer } from "./basic-analyzer";
import { useButton, useJoystick } from "../../../hooks";
import { BOTTOM_FACE, RIGHT_FACE, LEFT_FACE, TOP_FACE } from "../../../constants";
import styles from "./basic-analyzer.module.css";

jest.mock("../../../hooks");

describe("BasicAnalyzer", () => {
    beforeEach(() => {
        useButton.mockReset();
        useButton.mockReturnValue({});

        useJoystick.mockReset();
        useJoystick.mockReturnValue({});
    });

    it.each([
        ["bottom face button", BOTTOM_FACE, "bottom-face-button"],
        ["right face button", RIGHT_FACE, "right-face-button"],
        ["left face button", LEFT_FACE, "left-face-button"],
        ["top face button", TOP_FACE, "top-face-button"],
    ])("should show when the %s is pressed", (name, index, testId) => {
        useButton.mockImplementation((button) => button === index ? {
            pressed: true,
        } : {});
        render(<BasicAnalyzer />);
        expect(screen.getByTestId(testId)).toHaveClass(styles.pressed);
    });

    it.todo("should show when the up directional button is pressed");

    it.todo("should show when the right directional button is pressed");

    it.todo("should show when the down directional button is pressed");

    it.todo("should show when the left directional button is pressed");

    it.todo("should show when the select button is pressed");

    it.todo("should show when the start button is pressed");

    it.todo("should show when the left bumper button is pressed");

    it.todo("should show when the right bumper button is pressed");

    it.todo("should show when the left stick button is pressed");

    it.todo("should show when the right stick button is pressed");
});
