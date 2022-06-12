import { LEFT, RIGHT } from "../../constants";
import { useJoystick } from "../../hooks";
import { Joystick } from "./joystick";

export const JoystickAnalyzer = () => {
    const leftJoystick = useJoystick(LEFT);
    const rightJoystick = useJoystick(RIGHT);

    return <div>
        <Joystick horizontal={leftJoystick.x} vertical={leftJoystick.y} />
        <Joystick horizontal={rightJoystick.x} vertical={rightJoystick.y} />
    </div>;
};
