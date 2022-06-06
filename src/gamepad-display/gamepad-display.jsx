import { useGamepad } from "../useGamepad";
import { GamepadFrontView } from "./front-view";
import { GamepadTopView } from "./top-view";

export const GamepadDisplay = ({ index }) => {
    const gamepad = useGamepad(index);
    return <div>
        <span>Gamepad {index + 1} </span>
        <GamepadFrontView />
        <GamepadTopView />
    </div>;
};
