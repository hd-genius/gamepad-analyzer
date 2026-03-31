import { useCallback } from "react";
import { useContext, useEffect } from "react";
import { GamepadContext } from "../../contexts";
import { useAllGamepads } from "../../hooks";
import styles from "./toolbar.module.scss";
import { Analyzers } from "../../domain";

export const Toolbar = () => {
    const gamepads = useAllGamepads();
    const { id, selectGamepad, selectAnalyzer } =
        useContext(GamepadContext);
    
    const gamepadIds = gamepads.map((x) => x.id);

    const selectDefaultGamepad = useCallback(() => {
        if (gamepadIds.length) {
            selectGamepad(gamepadIds[0]);
        } else {
            selectGamepad(null);
        }
    }, [gamepadIds, selectGamepad]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(selectDefaultGamepad, []);

    useEffect(() => {
        const isGamepadStillConnected = gamepadIds.includes(id as string);
        if (!isGamepadStillConnected) {
            selectDefaultGamepad();
        }
    }, [gamepadIds, id, selectDefaultGamepad]);

    return (
        <div className={styles.toolbar}>
            <div className={styles.selectionGroup}>
                <label htmlFor="controller-select" className={styles.label}>Controller</label>
                <select id="controller-select" className={styles.selection} onChange={(e) => selectGamepad(e.target.value)} >
                    {gamepadIds.map(x => <option key={x} value={x} selected={id === x}>{x}</option>)}
                </select>
            </div>
            <div className={styles.selectionGroup}>
                <label htmlFor="analyzer-select" className={styles.label}>Analyzer</label>
                <select id="analyzer-select" className={styles.selection} onChange={(e) => selectAnalyzer(Number(e.target.value))} >
                    <AnalyzerOption type={Analyzers.BASIC} />
                    <AnalyzerOption type={Analyzers.JOYSTICK} />
                    <AnalyzerOption type={Analyzers.TRIGGER} />
                    <AnalyzerOption type={Analyzers.HAPTIC} />
                </select>
            </div>
        </div>
    );
};

const AnalyzerOption = ({
    type
}: { type: Analyzers }) => {
    const { analyzerType } = useContext(GamepadContext);
    const name = analyzerName(type);
    return <option id={`analyzer-${type}`} value={type} selected={type === analyzerType}>{name}</option>
}

const analyzerName = (type: Analyzers) => {
    switch (type) {
        case Analyzers.BASIC:
            return "Basic";
        case Analyzers.JOYSTICK:
            return "Joystick";
        case Analyzers.TRIGGER:
            return "Trigger";
        case Analyzers.HAPTIC:
            return "Haptics";
    }
}