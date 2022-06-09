import { useEffect, useState } from "react";

export const useGamepad = (id) => {
    const findGamepad = () => navigator.getGamepads().filter(x => x).filter(x => x.id === id)[0];

    const [lastUpdate, setLastUpdate] = useState(0);
    const [currentGamepad, setCurrentGamePad] = useState(findGamepad());

    useEffect(() => {
        let shouldPoll = true;

        function startPolling() {
            const gamepad = findGamepad();

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