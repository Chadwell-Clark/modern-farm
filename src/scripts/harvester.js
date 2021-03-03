export  const harvestPlants = (field) => {
    const seeds = [];
    field.forEach(plant => {
        if (plant.type === "Corn") {
            for(let i = 0; i < plant.output / 2; i++) {
                seeds.push(plant);
            }
        } else {
            for(let i = 0; i < plant.output; i++){
                seeds.push(plant);
            }
        };
    });
    return seeds;
};