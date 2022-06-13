import { LEFT, RIGHT } from "../../constants";
import { useJoystick } from "../../hooks";
import { Joystick } from "./joystick";
import styles from "./joystick.module.css";

export const JoystickAnalyzer = () => {
  const leftJoystick = useJoystick(LEFT);
  const rightJoystick = useJoystick(RIGHT);

  return (
    <div className={styles.analyzer}>
      <Joystick
        name="Left Joystick"
        horizontal={leftJoystick.x}
        vertical={leftJoystick.y}
      />
      <Joystick
        name="Right Joystick"
        horizontal={rightJoystick.x}
        vertical={rightJoystick.y}
      />
    </div>
  );
};
