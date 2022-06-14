import { LEFT_TRIGGER, RIGHT_TRIGGER } from "../../../constants";
import { useButton } from "../../../hooks";

export const TriggerAnalyzer = () => {
    const leftTrigger = useButton(LEFT_TRIGGER);
    const rightTrigger = useButton(RIGHT_TRIGGER);
    return (
        <div>
            <Trigger name="Left Trigger" value={leftTrigger.value} />
            <Trigger name="Right Trigger" value={rightTrigger.value} />
        </div>
    );
};

const Trigger = ({ name, value }) => {
    return (
        <div>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    );
};
