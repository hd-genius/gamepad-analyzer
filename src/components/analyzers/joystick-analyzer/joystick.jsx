import classNames from "classnames";
import styles from "./joystick.module.css";
import drawingStyles from "../drawing.module.css";

const formatAsPercent = value => {
    const percentage = value * 100;
    return percentage.toFixed(0);
};

export const Joystick = ({ name, horizontal, vertical }) => {
    const positionRadius = 4;
    const movementAreaRadius = 50;
    const renderWidth = (movementAreaRadius + positionRadius) * 2;
    const midpoint = renderWidth / 2;
    return (
        <div className={styles.joystick}>
            <table className={styles.joystickDetails}>
                <caption>{name}</caption>
                <tr>
                    <th className={styles.positionName}>Horizontal Axis</th>
                    <td className={styles.positionValue}>{formatAsPercent(horizontal)}</td>
                </tr>
                <tr>
                    <th className={styles.positionName}>Vertical Axis</th>
                    <td className={styles.positionValue}>{formatAsPercent(vertical)}</td>
                </tr>
            </table>
            <svg
                className={styles.joystickDisplay}
                viewBox={`0 0 ${renderWidth} ${renderWidth}`}
                width="12em"
            >
                <circle
                    cx={midpoint}
                    cy={midpoint}
                    className={drawingStyles.outlined}
                    r={movementAreaRadius}
                />
                <line
                    className={drawingStyles.outlined}
                    x1={positionRadius}
                    x2={renderWidth - positionRadius}
                    y1={midpoint}
                    y2={midpoint}
                />
                <line
                    className={drawingStyles.outlined}
                    x1={midpoint}
                    x2={midpoint}
                    y1={positionRadius}
                    y2={renderWidth - positionRadius}
                />
                <circle
                    cx={midpoint + movementAreaRadius * horizontal}
                    cy={midpoint + movementAreaRadius * vertical}
                    className={classNames(
                        drawingStyles.outlined,
                        drawingStyles.filled
                    )}
                    r={positionRadius}
                />
            </svg>
        </div>
    );
};
