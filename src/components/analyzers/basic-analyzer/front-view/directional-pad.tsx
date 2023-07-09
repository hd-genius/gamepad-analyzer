import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { ButtonProps } from "../button-props";

interface DirectionalPadProps {
    up: boolean;
    right: boolean;
    down: boolean;
    left: boolean;
}

export const DirectionalPad = ({
    up,
    down,
    left,
    right,
}: DirectionalPadProps) => {
    return (
        <>
            <path
                className={drawingStyles.outlined}
                d="m 26.56,19.09 v 3.1 h 3.1 c 0,0 0.33,0.28 0.33,1.62 0,1.34 -0.33,1.79 -0.33,1.79 H 26.48 v 3.1 c 0,0 -0.49,0.19 -1.5,0.19 -1,0 -1.55,-0.19 -1.55,-0.19 v -3.1 h -3.31 c 0,0 -0.35,-0.26 -0.36,-1.72 0,-1.46 0.36,-1.69 0.36,-1.69 h 3.31 v -3.11 c 0,0 0.16,-0.29 1.6,-0.29 1.44,0 1.53,0.29 1.53,0.29 z"
            />
            {/* <DirectionalPadButton pressed={up} direction={Direction.UP} />
            <DirectionalPadButton pressed={right} direction={Direction.RIGHT} />
            <DirectionalPadButton pressed={down} direction={Direction.DOWN} />
            <DirectionalPadButton pressed={left} direction={Direction.LEFT} /> */}
        </>
    );
};

const DIRECTIONAL_PAD_CENTER = {
    x: 0,
    y: 0,
};

enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT,
}

const rotationForDirection = (direction: Direction) => {
    switch (direction) {
        case Direction.UP:
            return 0;
        case Direction.RIGHT:
            return 90;
        case Direction.DOWN:
            return 180;
        case Direction.LEFT:
            return -90;
    }
};

interface DirectionalPadButtonProps extends ButtonProps {
    direction: Direction;
}

const DirectionalPadButton = ({
    pressed,
    direction,
}: DirectionalPadButtonProps) => {
    const rotation = rotationForDirection(direction);
    return (
        <path
            className={classNames(drawingStyles.pressed)}
            d="m 26.561666,19.093082 v 3.10058 h 3.094325 c 0,0 0.32886,0.28236 0.32886,1.62464 0,1.34228 -0.32886,1.786 -0.32886,1.786 H 26.47972 v 3.10059 c 0,0 -0.492226,0.19379 -1.498617,0.19379 -1.00639,0 -1.550294,-0.19379 -1.550294,-0.19379 v -3.10059 h -3.307292 c 0,0 -0.354629,-0.25926 -0.356003,-1.71605 -0.0014,-1.45678 0.356003,-1.68519 0.356003,-1.68519 h 3.307292 v -3.10999 c 0,0 0.1609,-0.29232 1.595937,-0.29232 1.435036,0 1.53492,0.29233 1.53492,0.29233 z"
        />
    );
};
