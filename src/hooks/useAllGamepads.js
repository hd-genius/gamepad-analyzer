import { useState, useEffect } from "react";

export const useAllGamepads = () => {
  const [gamepads, setGamepads] = useState([]);

  useEffect(() => {
    const updateControllers = () => {
      const connectedGamepads = navigator.getGamepads().filter((x) => x);
      setGamepads(connectedGamepads);
    };

    updateControllers();
    window.addEventListener("gamepadconnected", updateControllers);
    window.addEventListener("gamepaddisconnected", updateControllers);

    return () => {
      window.removeEventListener("gamepadconnected", updateControllers);
      window.removeEventListener("gamepaddisconnected", updateControllers);
    };
  }, []);

  return gamepads;
};
