import { useContext, useEffect } from "react";
import { GamepadContext } from "../contexts";
import { useAllGamepads } from "../hooks";

export const Toolbar = () => {
    const gamepads = useAllGamepads();
    const { id, selectGamepad } = useContext(GamepadContext);

    const selectDefaultGamepad = () => {
        if (gamepads.length) {
            selectGamepad(gamepads[0].id);
        } else {
            selectGamepad(null);
        }
    }

    useEffect(selectDefaultGamepad);

    useEffect(() => {
        const isGamepadStillConnected = gamepads.map(x => x.id).includes(id);
        if (!isGamepadStillConnected) {
            selectDefaultGamepad();
        }
    }, [gamepads. id]);

    return <select onChange={e => selectGamepad(e.target.value)}>
        {gamepads.map(gamepad => <option value={gamepad.id} key={gamepad.id}>Gamepad {gamepad.index}</option>)}
    </select>;
};