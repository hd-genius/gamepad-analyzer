import { useContext, useState } from "react";
import { Analyzers } from "../../constants";
import { GamepadContext } from "../../contexts";
import styles from "./toolbar.module.css";
import classNames from "classnames";

interface GamepadDropdownProps {
    id: string;
}

export const GamepadDropdown = ({ id }: GamepadDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpansion = () => {setIsOpen(x => !x)};
    return <li>
        <div onClick={toggleExpansion}>
            <span>id: {id}</span>
            <span>type: unknown</span>
        </div>
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
    const { selectAnalyzer, selectGamepad } = useContext(GamepadContext);
    return <li className={styles.analyzerOption}>
        <button className={styles.analyzerOptionButton} onClick={() => {
            selectAnalyzer(type);
            selectGamepad(id);
        }}>{children}</button>
    </li>
}