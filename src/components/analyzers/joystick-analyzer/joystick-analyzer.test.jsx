import { LEFT, RIGHT } from "../../../constants";

describe("JoystickAnalyzer", () => {
    describe.each([
        ["left", LEFT],
        ["right", RIGHT],
    ])("%s joystick", () => {
        describe("values table", () => {
            it.todo("should show the horizontal value of the joystick");

            it.todo("should show the vertical value of the joystick");
        });

        describe("joystick drawing", () => {
            it.todo("should show the horizontal displacement of the joystick");

            it.todo("should show the vertical displacement of the joystick");
        });
    });
});
