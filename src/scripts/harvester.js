export  const harvestPlants = (field) => {
    const seeds = [];
    let idCount = 0;
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
    seeds.forEach(seed =>{
        idCount++;
        seed.id =idCount;

    });
    return seeds;
};