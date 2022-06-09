import { useGamepad } from "../../hooks";
import {
    LEFT_SHOULDER,
    RIGHT_SHOULDER,
    LEFT_TRIGGER,
    RIGHT_TRIGGER,
} from "../../constants";
import { useButton } from "../../hooks/useButton";

export const TopView = () => {
    const leftBumperButton = useButton(LEFT_SHOULDER);
    const rightBumperButton = useButton(RIGHT_SHOULDER);

    const leftTrigger = useButton(LEFT_TRIGGER);
    const rightTrigger = useButton(RIGHT_TRIGGER);

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <span>LB &ndash; {leftBumperButton.value}</span>
        <span>RB &ndash; {rightBumperButton.value}</span>

        <span>LT &ndash; {leftTrigger.value}</span>
        <span>RT &ndash; {rightTrigger.value}</span>
    </div>;
};
