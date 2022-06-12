import { FrontView } from "./front-view";
import { TopView } from "./top-view";
import styles from "./basic-analyzer.module.css";

export const BasicAnalyzer = () => {
    return <div className={styles.analyzer}>
        <FrontView />
        <TopView />
    </div>;
};
