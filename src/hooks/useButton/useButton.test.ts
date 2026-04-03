import { useGamepad } from "../useGamepad";
import { useButton } from ".";

jest.mock("../useGamepad");

describe("useButton", () => {
    it("should return the correct button from the current gamepad", () => {
        const targetButton = {
            pressed: true,
        };

        (useGamepad as jest.Mock).mockReturnValue({
            buttons: [{}, targetButton],
        });

        expect(useButton(1)).toEqual(targetButton);
    });
});
