import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { ButtonProps } from "../button-props";

class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vector: Vector2D): Vector2D {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    toString(): string {
        return `${this.x},${this.y}`;
    }
}

enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT,
}

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
            <defs>
                <clipPath id="dpad-clip-boundary">
                    <use href="#dpad-outline"  />
                </clipPath>
            </defs>
            <g clipPath="url(#dpad-clip-boundary)">
                <DirectionalPadButton pressed={up} direction={Direction.UP} />
                <DirectionalPadButton pressed={right} direction={Direction.RIGHT} />
                <DirectionalPadButton pressed={down} direction={Direction.DOWN} />
                <DirectionalPadButton pressed={left} direction={Direction.LEFT} />
            </g>
            <path
                id="dpad-outline"
                className={classNames(drawingStyles.outlined, drawingStyles.empty)}
                d="m 26.56,19.09 v 3.1 h 3.1 c 0,0 0.33,0.28 0.33,1.62 0,1.34 -0.33,1.79 -0.33,1.79 H 26.48 v 3.1 c 0,0 -0.49,0.19 -1.5,0.19 -1,0 -1.55,-0.19 -1.55,-0.19 v -3.1 h -3.31 c 0,0 -0.35,-0.26 -0.36,-1.72 0,-1.46 0.36,-1.69 0.36,-1.69 h 3.31 v -3.11 c 0,0 0.16,-0.29 1.6,-0.29 1.44,0 1.53,0.29 1.53,0.29 z"
            />
        </>
    );
};

const DIRECTIONAL_PAD_CENTER = new Vector2D(25.06, 24.09);

const dpadRadius = 6;

const ROTATION_MAP = {
    [Direction.UP]: 0,
    [Direction.RIGHT]: 90,
    [Direction.DOWN]: 180,
    [Direction.LEFT]: -90
}

interface DirectionalPadButtonProps extends ButtonProps {
    pressed: boolean;
    direction: Direction;
}

const DirectionalPadButton = ({
    pressed,
    direction,
}: DirectionalPadButtonProps) => {
    const rotation = ROTATION_MAP[direction];
    const upperLeft = new Vector2D(-dpadRadius, -dpadRadius);

    return (
        <path
            className={classNames({[drawingStyles.pressed]: pressed})}
            d={`m ${DIRECTIONAL_PAD_CENTER} l ${upperLeft} h ${dpadRadius * 2} z`}
            transform={`rotate(${rotation} ${DIRECTIONAL_PAD_CENTER.x} ${DIRECTIONAL_PAD_CENTER.y})`}
        />
    );
};
