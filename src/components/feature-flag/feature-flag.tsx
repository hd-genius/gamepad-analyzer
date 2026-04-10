interface FeatureFlagProps {
    name: string;
    children: any;
}

export function FeatureFlag({name, children}: FeatureFlagProps) {
    const variableName = `REACT_APP_FEATURE_FLAG_${name.toUpperCase()}`;
    const value = process.env[variableName];
    const isValueSet = value !== null && value !== undefined;
    if (isValueSet) {
        if (value.toLowerCase() === "false") {   
            console.log(`${variableName} is disabled`)
            return null;
        }
    }
    console.log(`${variableName} is enabled`)
    return children;
}