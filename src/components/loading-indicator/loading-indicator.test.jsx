import { render, screen } from "@testing-library/react";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";

describe("LoadingIndicator", () => {
    it("should show that the content is loading", () => {
        render(<LoadingIndicator />);
        expect(screen.getByTestId("loading-indicator")).toBeVisible();
    });
});
