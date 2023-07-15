import { useCallback } from "react";
import { useContext, useEffect } from "react";
import { GamepadContext } from "../../contexts";
import { useAllGamepads } from "../../hooks";
import styles from "./toolbar.module.scss";
import { GamepadDropdown } from "./gamepad-dropdown";

export const Toolbar = () => {
    const gamepads = useAllGamepads();
    const { id, selectGamepad } =
        useContext(GamepadContext);
    
    const gamepadIds = gamepads.map((x) => x.id);

    const selectDefaultGamepad = useCallback(() => {
        if (gamepadIds.length) {
            selectGamepad(gamepadIds[0]);
        } else {
            selectGamepad(null);
        }
    }, [gamepadIds, selectGamepad]);

    useEffect(selectDefaultGamepad, []);

    useEffect(() => {
        const isGamepadStillConnected = gamepadIds.includes(id);
        if (!isGamepadStillConnected) {
            selectDefaultGamepad();
        }
    }, [gamepads, id, selectDefaultGamepad]);

    return (
        <ul className={styles.toolbar}>
            {gamepadIds.map(x => <GamepadDropdown id={x} />)}
        </ul>
    );
};
