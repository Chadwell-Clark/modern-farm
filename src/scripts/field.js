const field = [];

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        seedObj.forEach(seed => {
            field.push(seed);
        });
    
        // return field;
    } else {
        field.push(seedObj);
        // return field;
    }
};
// export const addPlant = (seedObj) => {
//     if (!seedObj.isArray) {
//         field.push(seedObj);
//         return field;
//     } 

// };

export const usePlants = () => {
    const fieldCopy = field;
    return fieldCopy;
};