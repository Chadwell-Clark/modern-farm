console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/Corn.js";
import { createPotato } from "./seeds/Potato.js";
import { createSoybean } from "./seeds/Soybean.js";
import { createWheat } from "./seeds/Wheat.js";
import { createSunflower } from "./seeds/Sunflower.js";


const yearlyPlan  = createPlan();
// const asparagusSeed = createAsparagus();
console.log(yearlyPlan);

console.log(createAsparagus());
console.log(createCorn());
console.log(createSoybean());
console.log(createWheat());
console.log(createSunflower());
console.log(createPotato());


