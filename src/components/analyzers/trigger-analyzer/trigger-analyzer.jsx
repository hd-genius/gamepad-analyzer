import { Buttons } from "../../../constants";
import { useButton } from "../../../hooks";

export const TriggerAnalyzer = () => {
    const leftTrigger = useButton(Buttons.LEFT_TRIGGER);
    const rightTrigger = useButton(Buttons.RIGHT_TRIGGER);
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
