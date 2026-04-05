import { StatusIndicator } from "./components";
import { Main } from "./components/main/main";

export const App = () => {
    const supportsGamepads = "getGamepads" in navigator;

    if (!supportsGamepads) {
        return <StatusIndicator>This browser does not support the Gamepad API. Please use a browser that does.</StatusIndicator>
    } else {
        return <Main/>;
    }
};
