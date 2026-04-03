import { useEffect } from "react";

export const useEachFrame = (callback) =>
    useEffect(() => {
        let shouldContinue = true;

        function handleNextFrame() {
            callback();

            if (shouldContinue) {
                window.requestAnimationFrame(handleNextFrame);
            }
        }

        window.requestAnimationFrame(handleNextFrame);

        return () => {
            shouldContinue = false;
        };
    }, [callback]);
