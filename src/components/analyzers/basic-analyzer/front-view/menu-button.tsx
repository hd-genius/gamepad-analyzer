import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { ButtonProps } from "../button-props";
import { PositionableProps } from "../../drawing";

interface MenuButtonProps extends ButtonProps, PositionableProps {
    testId: string;
}

export const MenuButton = ({ pressed, x, y, testId }: MenuButtonProps) => {
    return (
        <circle
            className={classNames(drawingStyles.outlined, {
                [drawingStyles.pressed]: pressed,
            })}
            cx={x}
            cy={y}
            r="1.29"
            data-testid={testId}
        />
    );
};
