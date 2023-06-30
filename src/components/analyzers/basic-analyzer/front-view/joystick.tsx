import { PositionableProps } from "../../drawing";
import { ButtonProps } from "../button-props";
import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";

interface JoystickProps extends ButtonProps, PositionableProps {
    horizontal: number;
    vertical: number;
    testId: string;
}

const JOYSCTICK_MOVEMENT_SCALE = 1.5;

export const Joystick = ({ pressed, x, y, horizontal = 0, vertical = 0, testId }: JoystickProps) => {
    return (
        <ellipse
            className={classNames(drawingStyles.outlined, {
                [drawingStyles.pressed]: pressed,
            })}
            cx={x + horizontal * JOYSCTICK_MOVEMENT_SCALE}
            cy={y + vertical * JOYSCTICK_MOVEMENT_SCALE}
            rx="3.43"
            ry="3.54"
            data-testid={testId}
        />
    );
};
