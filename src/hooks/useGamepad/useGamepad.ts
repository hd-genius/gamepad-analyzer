import { useContext, useState } from "react";
import { GamepadContext } from "../../contexts";
import { useEachFrame } from "../useEachFrame";

export const useGamepad = () => {
    const { id } = useContext(GamepadContext);

    const findGamepad = () =>
        navigator
            .getGamepads()
            .filter((x) => x)
            .filter((x) => (x as Gamepad).id === id)[0];

    const [lastUpdate, setLastUpdate] = useState(0);
    const [currentGamepad, setCurrentGamePad] = useState(findGamepad());

    useEachFrame(() => {
        const gamepad = findGamepad();

        if (gamepad && gamepad.timestamp > lastUpdate) {
            setCurrentGamePad(gamepad);
            setLastUpdate(gamepad.timestamp);
        }
    });

    return currentGamepad as Gamepad;
};
