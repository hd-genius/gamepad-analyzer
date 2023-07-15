export enum ControllerType {
    XBOX_360,
    XBOX_ONE,
    XBOX_ELITE,
    XBOX_SERIES,
    XBOX_ELITE_2,
    PS2,
    PS3,
    PS4,
    PS5,
    UNKNOWN
}

export namespace ControllerType {
    export function parseFrom(str: String): ControllerType {
        if(str.match(/xbox elite/i)) {
            return ControllerType.XBOX_ELITE_2;
        }
        return ControllerType.UNKNOWN;
    }

    const displayNames: { [key in ControllerType]: String} = {
        [ControllerType.XBOX_ELITE_2]: "Elite Series 2",
    } as any;

    export function displayNameFor(type: ControllerType): String {
        return displayNames[type] ?? "";
    }
}