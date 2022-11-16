import drawingStyles from "../drawing.module.css";
import styles from "./trigger.module.css";

export const Trigger = ({ name, value }) => {
    return (
        <div className={styles.trigger}>
            <div>
                <span>{name}</span>
                <span>{value}</span>
            </div>
            <svg viewBox="0 0 10 10">
                <circle
                    className={drawingStyles.outlined}
                    r={9}
                    cx={0}
                    cy={0}
                />
            </svg>
        </div>
    );
};
