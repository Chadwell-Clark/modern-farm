console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/Corn.js";
import { createPotato } from "./seeds/Potato.js";
import { createSoybean } from "./seeds/Soybean.js";
import { createWheat } from "./seeds/Wheat.js";
import { createSunflower } from "./seeds/Sunflower.js";
import {addPlant, usePlants} from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

// const asparagusSeed = createAsparagus();

// console.log(createAsparagus());
// console.log(createCorn());
// console.log(createSoybean());
// console.log(createWheat());
// console.log(createSunflower());
// console.log(createPotato());
// console.log(usePlants());
// console.log(addPlant(createAsparagus()));
// console.log(usePlants());
// console.log(addPlant(createPotato()));
// console.log(usePlants());
// console.log(addPlant(createCorn()))
// console.log(usePlants());
// addPlant(createAsparagus());
// addPlant(createCorn());
const yearlyPlan  = createPlan();
console.log(yearlyPlan);
plantSeeds(yearlyPlan);
const fieldOfPlants = usePlants();
console.log(fieldOfPlants);
const harvest = harvestPlants(fieldOfPlants);
console.log(harvest);


