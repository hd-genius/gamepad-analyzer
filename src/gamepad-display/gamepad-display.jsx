import { GamepadFrontView } from "./front-view";
import { GamepadTopView } from "./top-view";
import styles from "./gamepad-display.module.css";

export const GamepadDisplay = ({ index }) => {
    return <div className={styles.gamepadDisplay}>
        <span>Gamepad {index + 1}</span>
        <GamepadFrontView index={index} />
        <GamepadTopView index={index} />
    </div>;
};
