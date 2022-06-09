import { GamepadFrontView } from "./front-view";
import { GamepadTopView } from "./top-view";
import styles from "./gamepad-display.module.css";
import { useGamepad } from "../../hooks";

export const GamepadDisplay = ({ gamepadId }) => {
    const gamepad = useGamepad(gamepadId);
    return <div className={styles.gamepadDisplay}>
        <span>Gamepad {gamepad.index + 1}</span>
        <GamepadFrontView gamepadId={gamepadId} />
        <GamepadTopView gamepadId={gamepadId} />
        <button type="button">Advanced</button>
    </div>;
};
