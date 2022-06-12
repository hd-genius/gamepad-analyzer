import { useContext, useEffect } from "react";
import { Analyzers } from "../constants";
import { GamepadContext } from "../contexts";
import { useAllGamepads } from "../hooks";

export const Toolbar = () => {
    const gamepads = useAllGamepads();
    const { id, selectGamepad, analyzerType, selectAnalyzer } = useContext(GamepadContext);

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

    return <div>
        <select onChange={e => selectGamepad(e.target.value)}>
            {gamepads.map(gamepad => <option value={gamepad.id} key={gamepad.id}>Gamepad {gamepad.index}</option>)}
        </select>
        <select value={analyzerType} onChange={e => selectAnalyzer(parseInt(e.target.value))}>
            <option value={Analyzers.BASIC}>Basic</option>
            <option value={Analyzers.JOYSTICK}>Joystick</option>
        </select>
    </div>;
};