import { useEffect, useState } from "react";

export const useGamepad = (index) => {
    const [lastUpdate, setLastUpdate] = useState(0);
    const [currentGamepad, setCurrentGamePad] = useState(navigator.getGamepads()[index]);

    useEffect(() => {
        let shouldPoll = true;

        function startPolling() {
            const gamepad = navigator.getGamepads()[index];

            if (gamepad.timestamp > lastUpdate) {
                setCurrentGamePad(gamepad);
                setLastUpdate(gamepad.timestamp);
            }

            if (shouldPoll) {
                window.requestAnimationFrame(startPolling);
            }
        };

        const stopPolling = () => shouldPoll = true;
        
        window.requestAnimationFrame(startPolling);

        return stopPolling;
    }, [])

    return currentGamepad;
};
