import { useEffect } from "react";

export const useEachFrame = (callback) => useEffect(() => {
    let shouldPoll = true;

    function startPolling() {
        callback();

        if (shouldPoll) {
            window.requestAnimationFrame(startPolling);
        }
    }

    const stopPolling = () => (shouldPoll = true);

    window.requestAnimationFrame(startPolling);

    return stopPolling;
}, [callback]);