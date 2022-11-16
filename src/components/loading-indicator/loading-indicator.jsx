import { useEffect, useState } from "react";
import { StatusIndicator } from "../status-indicator";

export const LoadingIndicator = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const countInterval = setInterval(() => setCount(c => c + 1), 750);
        return () => clearInterval(countInterval);
    }, []);
    const numberOfDots = count % 4;
    const dots = ".".repeat(numberOfDots);
    return <StatusIndicator data-testid="loading-indicator">loading{dots}</StatusIndicator>;
};