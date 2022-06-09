import { FrontView } from "./front-view";
import { TopView } from "./top-view";
import styles from "./basic-analyzer.module.css";
import { useGamepad } from "../../hooks";

export const BasicAnalyzer = () => {
    const { index } = useGamepad();
    return <div className={styles.gamepadDisplay}>
        <span>Gamepad {index + 1}</span>
        <FrontView />
        <TopView />
    </div>;
};
