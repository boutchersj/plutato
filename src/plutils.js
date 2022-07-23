import pluData from './pluData.json' assert { type: 'json' };

export const deckDataCurator = (pluCategory) => {
    let names = []
    let codes = []
    for (let i in pluCategory) {
        const item = pluCategory[i];
        const key = Object.keys(item)[0];
        names.push(key);
        codes.push(item[key]);
    }
    return (
        [names, codes]
    );
}

export const byUnitsMisc = deckDataCurator(pluData.Units.Miscellaneous);
export const byWeightMisc = deckDataCurator(pluData.Weight.Miscellaneous);