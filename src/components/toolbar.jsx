import { useContext, useEffect } from "react";
import { Analyzers } from "../constants";
import { GamepadContext } from "../contexts";
import { useAllGamepads } from "../hooks";
import styles from "./toolbar.module.css";

export const Toolbar = () => {
  const gamepads = useAllGamepads();
  const { id, selectGamepad, analyzerType, selectAnalyzer } =
    useContext(GamepadContext);

  const selectDefaultGamepad = () => {
    if (gamepads.length) {
      selectGamepad(gamepads[0].id);
    } else {
      selectGamepad(null);
    }
  };

  useEffect(selectDefaultGamepad);

  useEffect(() => {
    const isGamepadStillConnected = gamepads.map((x) => x.id).includes(id);
    if (!isGamepadStillConnected) {
      selectDefaultGamepad();
    }
  }, [gamepads, id]);

  return (
    <div className={styles.toolbar}>
      <select
        className={styles.dropdown}
        onChange={(e) => selectGamepad(e.target.value)}
      >
        {gamepads.map((gamepad) => (
          <option value={gamepad.id} key={gamepad.id}>
            Gamepad {gamepad.index + 1}
          </option>
        ))}
      </select>
      <select
        className={styles.dropdown}
        value={analyzerType}
        onChange={(e) => selectAnalyzer(parseInt(e.target.value))}
      >
        <option value={Analyzers.BASIC}>Basic</option>
        <option value={Analyzers.JOYSTICK}>Joystick</option>
        <option value={Analyzers.TRIGGER}>Trigger</option>
      </select>
    </div>
  );
};
