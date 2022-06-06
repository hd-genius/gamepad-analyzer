import { useEffect, useState } from "react";

export const useGamepad = (index) => {
    return navigator.getGamepads()[index];
};
