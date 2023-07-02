import drawingStyles from "../../drawing.module.css";
import classNames from "classnames";
import { Handedness } from "./handedness";
import { ButtonProps } from "../button-props";


interface ShoulderButtonProps extends ButtonProps {
    side: Handedness;
    testId: string;
}


export const TriggerButton = ({ side, pressed, testId }: ShoulderButtonProps) => {
    if (side === Handedness.LEFT) {
        return (
            <g
                transform="translate(-30.6,-80.71)"
                className={classNames(drawingStyles.outlined, {
                    [drawingStyles.pressed]: pressed,
                })}
                data-testid={testId}
            >
                <path d="m 136.35,114.64 c 0,0 2.41,16.43 3,18.63 0.28,1.05 0.85,2.1 1.73,2.77 0.8,0.61 2.98,1.17 5.66,0.99 2.99,-0.19 4.98,-1.18 6.83,-2.76 2.18,-1.86 2.98,-4.72 3.92,-7.28 1.34,-3.65168 2.74,-7.55 3.13,-11.38 0.21,-2.09 0.49,-5.79 0.49,-5.79 0,0 -4.23,0.76 -6.18,1.18 -2.06,0.44 -7,1.59 -7,1.59 l -10.49,1.89 z" />
                <path d="m 137.48,114.38 10.44,-1.78 c 0,0 0.91,5.1 2.08,10.35 1.13,5.06 2.84,10.21 2.16,10.9 -0.64,0.64 -4.88,1.88 -6.22,1.88 -1.49,0 -2.91,0.02 -3.84,-1.14 -1.53,-1.91 -4.62,-20.21 -4.62,-20.21 z" />
            </g>
        );
    } else {
        return (
            <g
                transform="translate(-151.27,-80.91)"
                className={classNames(drawingStyles.outlined, {
                    [drawingStyles.pressed]: pressed,
                })}
                data-testid={testId}
            >
                <path d="m 185.86,114.64 c 0,0 -2.41,16.43 -3,18.63 -0.28,1.05 -0.85,2.1 -1.73,2.77 -0.8,0.61 -2.98,1.17 -5.66,0.99 -2.99,-0.19 -4.98,-1.18 -6.83,-2.76 -2.18,-1.86 -2.98,-4.72 -3.92,-7.28 -1.34,-3.65 -2.74,-7.55 -3.13,-11.38 -0.21,-2.09 -0.49,-5.79 -0.49,-5.79 0,0 4.23,0.76 6.18,1.18 2.06,0.44 7,1.59 7,1.59 l 10.49,1.89 z" />
                <path d="m 184.72518,114.37691 -10.4369,-1.78246 c 0,0 -0.91209,5.0993 -2.08168,10.34958 -1.12746,5.06116 -2.84182,10.21443 -2.15603,10.90022 0.63763,0.63763 4.88413,1.88123 6.21851,1.88123 1.48762,0 2.91088,0.0176 3.84101,-1.14341 1.53328,-1.91384 4.61509,-20.20516 4.61509,-20.20516 z" />
            </g>
        );
    }
};