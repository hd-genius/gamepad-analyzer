import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { ButtonProps } from "../button-props";
import { PositionableProps } from "../../drawing";

interface HomeButtonProps extends ButtonProps, PositionableProps {}

export const HomeButton = ({ x, y, pressed }: HomeButtonProps) => {
    return (
        <ellipse
            className={classNames(drawingStyles.outlined, {
                [drawingStyles.pressed]: pressed,
            })}
            cx={x}
            cy={y}
            rx="2.4029541"
            ry="2.2737632"
        />
    );
};