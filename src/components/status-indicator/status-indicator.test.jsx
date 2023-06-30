import { render, screen } from "@testing-library/react";
import { StatusIndicator } from "./status-indicator";

describe("StatusIndicator", () => {
    it("should show the given content", () => {
        const content = "Some content";
        render(<StatusIndicator>{content}</StatusIndicator>);
        expect(screen.getByText(content)).toBeVisible();
    });
});
