import { ButtonProps } from "../button-props";
import { Handedness } from "./handedness";
import drawingStyles from "../../drawing.module.css";
import classNames from "classnames";

interface ShoulderButtonProps extends ButtonProps {
    side: Handedness;
    testId: string;
}

export const ShoulderButton = ({
    side,
    pressed,
    testId,
}: ShoulderButtonProps) => {
    if (side === Handedness.LEFT) {
        return (
            <g
                transform="translate(-30.59825,-80.713896)"
                className={classNames(drawingStyles.outlined, {
                    [drawingStyles.pressed]: pressed,
                })}
                data-testid={testId}
            >
                <path d="m 125.62328,112.72522 c 0,0 4.30027,-0.20251 6.37316,0.0379 1.04091,0.12074 2.19203,0.12836 3.12967,0.68283 0.58138,0.3438 1.32774,1.19497 1.32774,1.19497 l 1.13807,-0.18968 -0.11381,-2.80722 -11.8738,-0.45523 z" />
                <path d="M 125.63537,106.63329 123.814,96.76874 c 0,0 11.69156,-0.06462 17.24978,0.53605 2.66288,0.287774 6.30614,0.490708 8.89326,1.183926 2.65309,0.710894 4.41004,1.349478 6.67265,3.096034 1.36016,1.04993 2.54369,2.71201 3.27956,4.20871 0.49021,0.99706 1.1743,4.04757 1.1743,4.04757 l -13.16427,2.8062 z" />
                <path d="m 125.55029,106.6398 c 0,0 9.04697,0.26965 13.79161,1.22113 2.29553,0.46036 3.82629,0.49138 6.70306,2.26228 0.84461,0.51993 1.87432,2.52402 1.87432,2.52402 l -10.41032,1.81004 c 0,0 -1.10659,-1.29709 -1.91007,-1.72528 -0.99663,-0.53112 -2.52354,-0.72909 -3.64756,-0.83837 -2.02909,-0.19727 -6.34894,-0.0802 -6.34894,-0.0802 z" />
            </g>
        );
    } else {
        return (
            <g
                transform="translate(-151.13493,-80.811989)"
                className={classNames(drawingStyles.outlined, {
                    [drawingStyles.pressed]: pressed,
                })}
                data-testid={testId}
            >
                <path d="m 196.54382,112.72522 c 0,0 -4.30027,-0.20251 -6.37316,0.0379 -1.04091,0.12074 -2.19203,0.12836 -3.12967,0.68283 -0.58138,0.3438 -1.32774,1.19497 -1.32774,1.19497 l -1.13807,-0.18968 0.11381,-2.80722 11.8738,-0.45523 z" />
                <path d="m 196.53173,106.63329 1.82137,-9.86455 c 0,0 -11.69156,-0.06462 -17.24978,0.53605 -2.66288,0.287774 -6.30614,0.490708 -8.89326,1.183926 -2.65309,0.710894 -4.41004,1.349478 -6.67265,3.096034 -1.36016,1.04993 -2.54369,2.71201 -3.27956,4.20871 -0.49021,0.99706 -1.1743,4.04757 -1.1743,4.04757 l 13.16427,2.8062 z" />
                <path d="m 196.61681,106.6398 c 0,0 -9.04697,0.26965 -13.79161,1.22113 -2.29553,0.46036 -3.82629,0.49138 -6.70306,2.26228 -0.84461,0.51993 -1.87432,2.52402 -1.87432,2.52402 l 10.41032,1.81004 c 0,0 1.10659,-1.29709 1.91007,-1.72528 0.99663,-0.53112 2.52354,-0.72909 3.64756,-0.83837 2.02909,-0.19727 6.34894,-0.0802 6.34894,-0.0802 z" />
            </g>
        );
    }
};
