export interface VibrationActuator {
    start(): void;
    stop(): void;
    set strength(value: number);
}

export enum VibrationActuatorType {
    LEFT_HANDLE,
    RIGHT_HANDLE,
    LEFT_TRIGGER,
    RIGHT_TRIGGER,
}
