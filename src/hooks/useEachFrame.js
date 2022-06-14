import { useEffect } from "react";

export const useEachFrame = (callback) => useEffect(() => {
    let shouldPoll = true;

    function handleNextFrame() {
        callback();

        if (shouldPoll) {
            window.requestAnimationFrame(handleNextFrame);
        }
    }

    window.requestAnimationFrame(handleNextFrame);

    return () => (shouldPoll = false);
}, [callback]);