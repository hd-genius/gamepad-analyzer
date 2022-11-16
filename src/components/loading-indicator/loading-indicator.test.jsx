import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";

const TICK_DELAY = 750;

describe("LoadingIndicator", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    it("should start with no dots", () => {
        render(<LoadingIndicator />);
        expect(screen.getByText("loading")).toBeVisible();
    });

    it("should progressively add new dots", () => {
        render(<LoadingIndicator />);
        act(() => {
            jest.advanceTimersByTime(TICK_DELAY);
        });
        expect(screen.getByText("loading.")).toBeVisible();
    });

    it("should reset the number of dots after they have all been added", () => {
        render(<LoadingIndicator />);
        act(() => {
            jest.advanceTimersByTime(TICK_DELAY * 3);
        });
        expect(screen.getByText("loading...")).toBeVisible();
        act(() => {
            jest.advanceTimersByTime(TICK_DELAY);
        });
        expect(screen.getByText("loading")).toBeVisible();
    });
});
