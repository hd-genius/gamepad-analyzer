import classNames from "classnames";
import styles from "./joystick.module.css";

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
          <th>Horizontal Axis</th>
          <td>{horizontal}</td>
        </tr>
        <tr>
          <th>Vertical Axis</th>
          <td>{vertical}</td>
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
          className={styles.outlined}
          r={movementAreaRadius}
        />
        <line
          className={styles.outlined}
          x1={positionRadius}
          x2={renderWidth - positionRadius}
          y1={midpoint}
          y2={midpoint}
        />
        <line
          className={styles.outlined}
          x1={midpoint}
          x2={midpoint}
          y1={positionRadius}
          y2={renderWidth - positionRadius}
        />
        <circle
          cx={midpoint + movementAreaRadius * horizontal}
          cy={midpoint + movementAreaRadius * vertical}
          className={classNames(styles.outlined, styles.filled)}
          r={positionRadius}
        />
      </svg>
    </div>
  );
};
