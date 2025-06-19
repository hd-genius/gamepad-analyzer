import drawingStyles from "../drawing.module.css";
import styles from "./trigger.module.css";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const Trigger = ({ name, value }) => {
    const id = name.toLowerCase().replace(" ", "-");
    const clipPathName = id + "-clipping-bounds";
    const progressFillName = id + "-progress-fill";

    const radius = 100;
    const valueToRadianRatio  = Math.PI / 2;

    // endpoint of the line that divides the pressed from unpressed sections
    const x = Math.cos(value * valueToRadianRatio, radius) * radius;
    const y = Math.sin(value * valueToRadianRatio, radius) * radius;
    return (
        <div id={id} className={styles.trigger}>
            <div className={styles.triggerHeader}>
                <span>{name}</span>
                <span>{(value * 100).toFixed(0)}</span>
            </div>
            <svg
                viewBox="0 0 100 100"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath
                        clipPathUnits="userSpaceOnUse"
                        id={clipPathName}>
                        <path
                            d="M 5.9575905,2.6116543 H 93.883489 c 2.165014,0 3.930169,1.7563955 3.821482,3.918452 C 95.313791,54.09659 49.850516,95.571283 6.1210578,97.940234 3.9594773,98.057333 2.2029254,96.291873 2.2023783,94.126859 2.1940174,61.042347 2.0844702,19.341412 2.0486991,6.5317195 2.0426533,4.3667269 3.7925763,2.6116543 5.9575905,2.6116543 Z"
                            id="path7"
                            transform="matrix(1.0124091,0,0,1.0124091,-0.25483404,-1.2312636)" />
                    </clipPath>
                </defs>
                <path
                    style={{ "--drawing-scale-factor": 3 }}
                    className={drawingStyles.outlined}
                    d="M 5.9575905,2.6116543 H 93.883489 c 2.165014,0 3.930169,1.7563955 3.821482,3.918452 C 95.313791,54.09659 49.850516,95.571283 6.1210578,97.940234 3.9594773,98.057333 2.2029254,96.291873 2.2023783,94.126859 2.1940174,61.042347 2.0844702,19.341412 2.0486991,6.5317195 2.0426533,4.3667269 3.7925763,2.6116543 5.9575905,2.6116543 Z"
                    id="path6"
                    transform="matrix(1.0124091,0,0,1.0124091,-0.25483404,-1.2312636)" />
                <path
                    id={progressFillName}
                    className={drawingStyles.pressed}
                    d={`M 1.7208889,1.3767111 H 100 V 100 L ${x},${y} Z`}
                    clip-path={`url(#${clipPathName})`} />
            </svg>
        </div>
    );
};
