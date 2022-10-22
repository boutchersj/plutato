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

// Units
export const melons = deckDataCurator(pluData.Units.Melons);
export const oranges = deckDataCurator(pluData.Units.Oranges);
export const bellPeppers = deckDataCurator(pluData.Units['Bell Peppers']);
export const onionBags = deckDataCurator(pluData.Units['Onion Bags']);
export const watermelon = deckDataCurator(pluData.Units.Watermelon);
export const fallSeasonal = deckDataCurator(pluData.Units['Fall/Seasonal']);
export const floral = deckDataCurator(pluData.Units.Floral);
export const organicApples = deckDataCurator(pluData.Units['Organic Produce']['3# Apples']);
export const organicOnions = deckDataCurator(pluData.Units['Organic Produce']['3# Onions']);
export const organicPears = deckDataCurator(pluData.Units['Organic Produce']['3# Pears']);
export const organicPotatoes= deckDataCurator(pluData.Units['Organic Produce']['Grape Tomatoes']);

// Weight
export const apples = deckDataCurator(pluData.Weight.Apples);
export const beans = deckDataCurator(pluData.Weight.Beans);
export const eggplant = deckDataCurator(pluData.Weight.Eggplant);
export const grapes = deckDataCurator(pluData.Weight.Grapes);
export const nuts = deckDataCurator(pluData.Weight.Nuts);
export const onions = deckDataCurator(pluData.Weight.Onions);
export const pears = deckDataCurator(pluData.Weight.Pears);
export const smallHotPeppers = deckDataCurator(pluData.Weight['Small Hot Peppers']);
export const roots = deckDataCurator(pluData.Weight.Roots);
export const squash = deckDataCurator(pluData.Weight.Squash);
export const tomatoes = deckDataCurator(pluData.Weight.Tomatoes);

// Miscellaneous
export const miscellaneousByUnits = deckDataCurator(pluData.Units.Miscellaneous);
export const miscellaneousByWeight = deckDataCurator(pluData.Weight.Miscellaneous);
export const miscellaneousOrganic = deckDataCurator(pluData.Units['Organic Produce'].Miscellaneous);
