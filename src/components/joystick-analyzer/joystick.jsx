import classNames from "classnames";
import styles from "./joystick.module.css";

export const Joystick = ({ name, horizontal, vertical }) => {
    const movementScale = 50;
    return <div className={styles.joystick}>
        <table className={styles.joystickDetails}>
            <caption>{name}</caption>
            <tr>
                <th>Horizontal Axis</th>
                <td>{horizontal}</td>
            </tr>
            <tr>
                <th>Vertical Axis</th>
                <td>{vertical}</td>
            </tr>
        </table>
        <svg className={styles.joystickDisplay} viewBox="0 0 100 100" width="12em">
            <circle cx={50} cy={50} className={styles.outlined} r={50} />
            <line className={styles.outlined} x1={0} x2={100} y1={50} y2={50} />
            <line className={styles.outlined} x1={50} x2={50} y1={0} y2={100} />
            <circle cx={50 + movementScale * horizontal} cy={50 + movementScale * vertical} className={classNames(styles.outlined, styles.filled)} r={4} />
        </svg>
    </div>;
};
