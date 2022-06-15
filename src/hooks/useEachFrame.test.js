import { useEachFrame } from "./useEachFrame";
import { renderHook } from "@testing-library/react-hooks"

describe("useEachFrame", () => {
    beforeAll(() => {
        jest.spyOn(window, "requestAnimationFrame");
    });

    beforeEach(() => {
        window.requestAnimationFrame.mockReset();
    });

    it("should queue the callback for the next animation frame", () => {
        renderHook(() => useEachFrame(() => {}));
        expect(window.requestAnimationFrame).toHaveBeenCalled();
    });

    it("should call the callback during the next animation frame", () => {
        const callback = jest.fn();
        renderHook(() => useEachFrame(callback));
        const nextFrameCallback = window.requestAnimationFrame.mock.calls[0][0];
        nextFrameCallback();
        expect(callback).toHaveBeenCalled();
    });

    it("should queue the callback for the next animation frame after it has been called", () => {
        renderHook(() => useEachFrame(() => {}));
        const nextFrameCallback = window.requestAnimationFrame.mock.calls[0][0];
        window.requestAnimationFrame.mockReset();
        nextFrameCallback();
        expect(window.requestAnimationFrame).toHaveBeenCalled();
    });

    it("should not queue the callback for the next animation frame once the effect is cleaned up", () => {
        const { unmount } = renderHook(() => useEachFrame(() => {}));
        const nextFrameCallback = window.requestAnimationFrame.mock.calls[0][0];
        window.requestAnimationFrame.mockReset();
        unmount();
        nextFrameCallback();
        expect(window.requestAnimationFrame).not.toHaveBeenCalled();
    });
});
