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
        <svg viewBox="0 0 66.04 46.07" version="1.1">
            <g transform="translate(-0.48,-0.48)">
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
                    d="m 42.59,2 c 0,0 1.98,-1.16 3.03,-1.39 1.73,0 3.59,0.25 5.52,1 2.38,0.91 3.7,1.68 4.38,2.29 0.67,0.88 1.03,3 1.03,3 l -13.99,-3.93 z"
                    id="path6268"
                />
                <rect
                    className={drawingStyles.outlined}
                    width="17.94"
                    height="1.57"
                    x="24.65"
                    y="2"
                />
                <path
                    className={drawingStyles.outlined}
                    d="m 92.22,105.94 c -1.67,-0.11 -2.64,0.03 -6.36,1.39 -3.72,1.36 -3.88,2.17 -5.22,3.57 -2.46,2.55 -6.56,17.67 -6.56,17.67 0,0 -2.03,7.19 -1.86,10.85 0.16,3.4 0.05,4.86 2.38,7.67 1.06,1.27 4.13,2.7 4.13,2.7 0,0 1.08,0.29 5.07,-4.69 4,-4.98 6.88,-8.24 8.98,-8.28 l 12.31,-0.03 12.31,0.03 c 2.11,0.04 5,3.3 8.98,8.28 3.99,4.98 5.07,4.69 5.07,4.69 0,0 3.07,-1.42 4.13,-2.7 2.33,-2.8 2.23,-4.27 2.38,-7.67 0.17,-3.67 -1.86,-10.85 -1.86,-10.85 0,0 -4.1,-15.12 -6.56,-17.67 -1.34,-1.39 -1.5,-2.2 -5.22,-3.57 -3.72,-1.36 -4.69,-1.51 -6.36,-1.39 -1.67,0.11 -3.22,0.52 -3.22,0.52 l -9.65,-0.08 -9.65,0.08 c 0,0 -1.56,-0.4 -3.22,-0.52 z"
                    transform="translate(-71.6,-103.38)"
                />
                <HomeButton x={33.56} y={6.48} pressed={false} />
                <FaceButton
                    x={50.77}
                    y={8.87}
                    pressed={topFaceButton.pressed}
                    testId="top-face-button"
                />
                <FaceButton
                    x={55.23}
                    y={13.4}
                    pressed={rightFaceButton.pressed}
                    testId="right-face-button"
                />
                <FaceButton
                    x={46.17}
                    y={13.33}
                    pressed={leftFaceButton.pressed}
                    testId="left-face-button"
                />
                <FaceButton
                    x={50.63}
                    y={17.5}
                    pressed={bottomFaceButton.pressed}
                    testId="bottom-face-button"
                />
                <Joystick
                    x={16.75}
                    y={13.15}
                    pressed={leftStickButton.pressed}
                    horizontal={leftJoystick.x}
                    vertical={leftJoystick.y}
                    testId="left-stick"
                />
                <Joystick
                    x={42.41}
                    y={23.16}
                    pressed={rightStickButton.pressed}
                    horizontal={rightJoystick.x}
                    vertical={rightJoystick.y}
                    testId="right-stick"
                />
                <MenuButton
                    x={28.91}
                    y={13.15}
                    pressed={selectButton.pressed}
                    testId="select-button"
                />
                <MenuButton
                    x={38.52}
                    y={13.15}
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
