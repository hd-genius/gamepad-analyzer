import { ChangeEvent, useState } from "react";
import { useVibrationActuator } from "../../../hooks";
import styles from "./haptics-analyzer.module.scss";
import { VibrationActuatorType } from "../../../domain";

export const HapticsAnalyzer = () => {
    const vibrator = useVibrationActuator(VibrationActuatorType.RIGHT_HANDLE);
    const [strength, setStrength] = useState(0.5);
    const strengthInputProps = {
        min: 0,
        max: 1,
        step: 0.01,
        value: strength,
        onChange: (e: ChangeEvent) => {
            const value = parseFloat((e.target as any).value);
            setStrength(value);
        },
    };
    if (!vibrator) {
        return <></>;
    }
    return (
        <div className={styles.hapticsWrapper}>
            <span className={styles.strengthControls}>
                <label>Strength</label>
                <span className={styles.strengthControlRow}>
                    <input type="number" className={styles.strengthInput} {...strengthInputProps} />
                    <input
                        type="range"
                        className={styles.strengthSlider}
                        {...strengthInputProps}
                    />
                </span>
            </span>
            <button
                onMouseDown={() => vibrator.start()}
                onMouseUp={() => vibrator.stop()}
            >
                Vibrate
            </button>
        </div>
    );
};
