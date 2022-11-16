import { Buttons } from "../../../constants";
import { useButton } from "../../../hooks";
import { Trigger } from "./trigger";
import styles from "./trigger.module.css";

export const TriggerAnalyzer = () => {
    const leftTrigger = useButton(Buttons.LEFT_TRIGGER);
    const rightTrigger = useButton(Buttons.RIGHT_TRIGGER);
    return (
        <div className={styles.analyzer}>
            <Trigger name="Left Trigger" value={leftTrigger.value} />
            <Trigger name="Right Trigger" value={rightTrigger.value} />
        </div>
    );
};
