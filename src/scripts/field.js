const field = [];

export const addPlant = (seedObj) => {
    if (seedObj.isArray) {
        seedObj.forEach( obj => {
            field.push(seedObj)
        }
        );
        return field;
    } else {
        field.push(seedObj);
        return field;
    }
};

export const usePlants = () => {
    const fieldCopy = field;
    return fieldCopy;
};