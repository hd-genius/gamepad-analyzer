import { useContext, useState } from "react";
import { Analyzers } from "../../constants";
import { GamepadContext } from "../../contexts";
import styles from "./toolbar.module.scss";
import classNames from "classnames";

interface GamepadDropdownProps {
    id: string;
}

export const GamepadDropdown = ({ id }: GamepadDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpansion = () => {setIsOpen(x => !x)};
    const controllerType = "Unknown";
    return <li className={styles.dropdownSection}>
        <button className={styles.dropdownButton} onClick={toggleExpansion}>
            <div className={styles.controllerData}>
                <span className={styles.controllerId}>{id}</span>
                <span>Type: {controllerType}</span>
            </div>
            <img className={styles.dropdownIndicator} alt="dropdown indicator" />
        </button>
        <ul className={classNames(styles.analyzerOptions, {
            [styles.open]: isOpen
        })}>
            <AnalyzerButton id={id} type={Analyzers.BASIC}>Basic</AnalyzerButton>
            <AnalyzerButton id={id} type={Analyzers.JOYSTICK}>Joysticks</AnalyzerButton>
            <AnalyzerButton id={id} type={Analyzers.TRIGGER}>Triggers</AnalyzerButton>
            <AnalyzerButton id={id} type={Analyzers.HAPTIC}>Haptics</AnalyzerButton>
        </ul>
    </li>;
}


interface AnalyzerButtonProps {
    id: string;
    type: Analyzers;
    children: any;
}

const AnalyzerButton = ({ id, type, children }: AnalyzerButtonProps) => {
    const { selectAnalyzer, selectGamepad, id: selectedGamepad, analyzerType } = useContext(GamepadContext);
    const isSelected = id === selectedGamepad && type === analyzerType;
    return <li className={styles.analyzerOption}>
        <button className={classNames(styles.analyzerOptionButton, {
            [styles.activeAnalyzer]: isSelected
        })} onClick={() => {
            selectAnalyzer(type);
            selectGamepad(id);
        }}>{children}</button>
    </li>
}