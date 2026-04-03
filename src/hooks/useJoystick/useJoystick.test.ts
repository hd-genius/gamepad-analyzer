import { renderHook } from "@testing-library/react";
import { useJoystick } from ".";
import { useGamepad } from "../useGamepad";

jest.mock("../useGamepad");

describe("useJoystick", () => {
    it.each([
        ["left", 0, 0.56, 0.56, 0.12, 0.34, 0.89],
        ["right", 1, 0.34, 0.56, 0.12, 0.34, 0.89],
    ])(
        "should return the correct value for the %s joystick's horizontal axis",
        (name, joystickId, expectedValue, ...axes) => {
            (useGamepad as jest.Mock).mockReturnValue({
                axes,
            });
            const { result } = renderHook(() => useJoystick(joystickId));
            expect(result.current.x).toEqual(expectedValue);
        }
    );

    it.each([
        ["left", 0, 0.12, 0.56, 0.12, 0.34, 0.89],
        ["right", 1, 0.89, 0.56, 0.12, 0.34, 0.89],
    ])(
        "should return the correct value for the %s joystick's vertical axis",
        (name, joystickId, expectedValue, ...axes) => {
            (useGamepad as jest.Mock).mockReturnValue({
                axes,
            });
            const { result } = renderHook(() => useJoystick(joystickId));
            expect(result.current.y).toEqual(expectedValue);
        }
    );
});
