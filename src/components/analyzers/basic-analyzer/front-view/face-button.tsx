import { ButtonProps } from "../button-props";
import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { PositionableProps } from "../../drawing";

interface FaceButtonProps extends ButtonProps, PositionableProps {
    testId: string;
}

export const FaceButton = ({ pressed, x, y, testId }: FaceButtonProps) => {
    return (
        <ellipse
            className={classNames(drawingStyles.outlined, {
                [drawingStyles.pressed]: pressed,
            })}
            data-testid={testId}
            cx={x}
            cy={y}
            rx="2.16"
            ry="2.12"
        />
    );
};