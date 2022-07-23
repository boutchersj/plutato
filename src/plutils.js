import pluData from './pluData.json' assert { type: 'json' };

export const byUnitsMisc = () => {
    let names = []
    let codes = []
    for (let i in pluData.Units.Miscellaneous) {
        const item = pluData.Units.Miscellaneous[i];
        const key = Object.keys(item)[0];
        names.push(key);
        codes.push(item[key]);
    }
    return (
        [names,codes]
    );
}

export const byWeightMisc = () => {
    let names = []
    let codes = []
    for (let i in pluData.Weight.Miscellaneous) {
        const item = pluData.Weight.Miscellaneous[i];
        const key = Object.keys(item)[0];
        names.push(key);
        codes.push(item[key]);
    }
    return (
        [names, codes]
    );
}