import { useGamepad } from "./useGamepad";
import { useButton } from "./useButton";

jest.mock("./useGamepad");

describe("useButton", () => {
    it("should return the correct button from the current gamepad", () => {
        const targetButton = {
            pressed: true,
        };

        useGamepad.mockReturnValue({
            buttons: [
                {},
                targetButton
            ],
        });

        expect(useButton(1)).toEqual(targetButton);
    });
});
