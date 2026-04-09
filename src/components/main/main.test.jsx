import { render, screen } from "@testing-library/react";
import { useAllGamepads } from "../../hooks";
import { Main } from "./main";

jest.mock("../../hooks");

describe("GamepadDisplay", () => {
    beforeEach(() => {
        useAllGamepads.mockReset();
    });

    it("should show a message when no gamepads are connected", () => {
        useAllGamepads.mockReturnValue([]);
        render(<Main />);
        expect(screen.getByText("No gamepads detected")).toBeVisible();
    });

    it.todo(
        "should render the basic analyzer by default when the a gamepad is connected"
    );

    it.todo(
        "should render the correct analyzer when the basic analyzer is selected"
    );

    it.todo(
        "should render the correct analyzer when the joystick analyzer is selected"
    );
});
