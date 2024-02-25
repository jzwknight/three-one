export function includeChemical(combination: string) {
    return combination.indexOf("C") > -1;
}

export function includePhysicl(combination: string) {
    return combination.indexOf("P") > -1;
}

export function includeBio(combination: string) {
    return combination.indexOf("O") > -1;
}
export function includePolitical(combination: string) {
    return combination.indexOf("p") > -1;
}
export function includeHistory(combination: string) {
    return combination.indexOf("H") > -1;
}
export function includeGeography(combination: string) {
    return combination.indexOf("G") > -1;
}
export function includePhysiclAndChemical (combination: string) {
    return combination.indexOf("P") > -1 && combination.indexOf("C") > -1;
}