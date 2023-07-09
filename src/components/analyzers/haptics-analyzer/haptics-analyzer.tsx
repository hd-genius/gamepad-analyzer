import { ChangeEvent, useState } from "react";
import { useVibrationControls } from "../../../hooks";
import styles from "./haptics-analyzer.module.scss";

export const HapticsAnalyzer = () => {
    const vibrationControls = useVibrationControls();
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
                onMouseDown={() => vibrationControls.start()}
                onMouseUp={() => vibrationControls.stop()}
            >
                Vibrate
            </button>
        </div>
    );
};
