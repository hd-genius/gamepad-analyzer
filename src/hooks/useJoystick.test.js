import { useJoystick } from "./useJoystick";
import { useGamepad } from "./useGamepad";

jest.mock("./useGamepad");

describe("useJoystick", () => {
    it.each([
        ["left", 0, 0.56, 0.56, 0.12, 0.34, 0.89],
        ["right", 1, 0.34, 0.56, 0.12, 0.34, 0.89],
    ])(
        "should return the correct value for the %s joystick's horizontal axis",
        (name, joystickId, expectedValue, ...axes) => {
            useGamepad.mockReturnValue({
                axes,
            });
            expect(useJoystick(joystickId).x).toEqual(expectedValue);
        }
    );

    it.each([
        ["left", 0, 0.12, 0.56, 0.12, 0.34, 0.89],
        ["right", 1, 0.89, 0.56, 0.12, 0.34, 0.89],
    ])(
        "should return the correct value for the %s joystick's vertical axis",
        (name, joystickId, expectedValue, ...axes) => {
            useGamepad.mockReturnValue({
                axes,
            });
            expect(useJoystick(joystickId).y).toEqual(expectedValue);
        }
    );
});
