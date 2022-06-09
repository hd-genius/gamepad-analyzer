import { FrontView } from "./front-view";
import { TopView } from "./top-view";
import styles from "./gamepad-display.module.css";
import { useGamepad } from "../../hooks";
import { GamepadContext } from "../../contexts";

export const GamepadDisplay = ({ gamepadId }) => {
    return <GamepadContext.Provider value={{ id: gamepadId }}>
        <div className={styles.gamepadDisplay}>
            <FrontView />
            <TopView />
            <button type="button">Advanced</button>
        </div>;
    </GamepadContext.Provider> 
};
