import classNames from "classnames";
import drawingStyles from "../../drawing.module.css";
import { Buttons, Joysticks } from "../../../../constants";
import { useButton, useJoystick } from "../../../../hooks";
import { Joystick } from "./joystick";
import { DirectionalPad } from "./directional-pad";
import { FaceButton } from "./face-button";
import { HomeButton } from "./home-button";
import { MenuButton } from "./menu-button";

export const FrontView = () => {
    const bottomFaceButton = useButton(Buttons.BOTTOM_FACE);
    const rightFaceButton = useButton(Buttons.RIGHT_FACE);
    const leftFaceButton = useButton(Buttons.LEFT_FACE);
    const topFaceButton = useButton(Buttons.TOP_FACE);

    const selectButton = useButton(Buttons.SELECT);
    const startButton = useButton(Buttons.START);

    const leftStickButton = useButton(Buttons.LEFT_STICK);
    const rightStickButton = useButton(Buttons.RIGHT_STICK);

    const topDirectionButton = useButton(Buttons.UP_PAD);
    const bottomDirectionButton = useButton(Buttons.DOWN_PAD);
    const leftDirectionButton = useButton(Buttons.LEFT_PAD);
    const rightDirectionButton = useButton(Buttons.RIGHT_PAD);

    const leftJoystick = useJoystick(Joysticks.LEFT);
    const rightJoystick = useJoystick(Joysticks.RIGHT);

    return (
        <svg viewBox="0 0 66.03643 46.065399" version="1.1">
            <g transform="translate(-0.48021528,-0.47886159)">
                <use
                    x="0"
                    y="0"
                    href="#path6268"
                    transform="matrix(-1,0,0,1,67.233916,-3.4567645e-6)"
                    width="100%"
                    height="100%"
                />
                <path
                    className={drawingStyles.outlined}
                    d="m 42.587711,2.0034724 c 0,0 1.98244,-1.15648003 3.02612,-1.39229003 1.73339,-0.003 3.5864,0.25464 5.52312,1.00012003 2.3768,0.91488 3.70387,1.6771 4.38492,2.2889 0.67422,0.87956 1.03354,2.99724 1.03354,2.99724 l -13.98597,-3.92564 z"
                    id="path6268"
                />
                <rect
                    className={drawingStyles.outlined}
                    width="17.941517"
                    height="1.5712559"
                    x="24.646204"
                    y="2.0034697"
                />
                <path
                    className={drawingStyles.outlined}
                    d="m 92.222656,105.9375 c -1.66807,-0.1117 -2.635128,0.0322 -6.355468,1.39453 -3.72034,1.3624 -3.876934,2.173 -5.220704,3.56641 -2.45975,2.55062 -6.5625,17.67187 -6.5625,17.67187 0,0 -2.027115,7.18724 -1.859375,10.85352 0.1556,3.4009 0.05235,4.86406 2.382813,7.66797 1.05904,1.27421 4.126953,2.69726 4.126953,2.69726 0,0 1.078116,0.29028 5.072266,-4.68945 3.99415,-4.97973 6.875355,-8.24321 8.984375,-8.2832 l 12.308594,-0.0332 12.30859,0.0332 c 2.10902,0.04 4.99023,3.30347 8.98438,8.2832 3.99415,4.97973 5.07226,4.68945 5.07226,4.68945 0,0 3.06792,-1.42305 4.12696,-2.69726 2.33046,-2.80391 2.22916,-4.26707 2.38476,-7.66797 0.16774,-3.66628 -1.86133,-10.85352 -1.86133,-10.85352 0,0 -4.10275,-15.12125 -6.5625,-17.67187 -1.34377,-1.39341 -1.49841,-2.20401 -5.21875,-3.56641 -3.72034,-1.36235 -4.68935,-1.50623 -6.35742,-1.39453 -1.66808,0.1117 -3.22461,0.51562 -3.22461,0.51562 l -9.65234,-0.0762 -9.652344,0.0762 c 0,0 -1.55653,-0.40392 -3.22461,-0.51562 z"
                    transform="translate(-71.602149,-103.38007)"
                />
                <HomeButton x={33.563824} y={6.4840302} />
                <FaceButton
                    x={50.772846}
                    y={8.8731289}
                    pressed={topFaceButton.pressed}
                    testId="top-face-button"
                />
                <FaceButton
                    x={55.2308185}
                    y={13.4041824}
                    pressed={rightFaceButton.pressed}
                    testId="right-face-button"
                />
                <FaceButton
                    x={46.1687105}
                    y={13.3311024}
                    pressed={leftFaceButton.pressed}
                    testId="left-face-button"
                />
                <FaceButton
                    x={50.62668249}
                    y={17.4967424}
                    pressed={bottomFaceButton.pressed}
                    testId="bottom-face-button"
                />
                <Joystick
                    x={16.753397}
                    y={13.148405}
                    pressed={leftStickButton.pressed}
                    horizontal={leftJoystick.x}
                    vertical={leftJoystick.y}
                    testId="left-stick"
                />
                <Joystick
                    x={42.405007}
                    y={23.160568}
                    pressed={rightStickButton.pressed}
                    horizontal={rightJoystick.x}
                    vertical={rightJoystick.y}
                    testId="right-stick"
                />
                <MenuButton
                    x={28.90851}
                    y={13.150282}
                    pressed={selectButton.pressed}
                    testId="select-button"
                />
                <MenuButton
                    x={38.5203265}
                    y={13.150282}
                    pressed={startButton.pressed}
                    testId="start-button"
                />
                <DirectionalPad
                    up={topDirectionButton.pressed}
                    right={rightDirectionButton.pressed}
                    down={bottomDirectionButton.pressed}
                    left={leftDirectionButton.pressed}
                />
            </g>
        </svg>
    );
};
