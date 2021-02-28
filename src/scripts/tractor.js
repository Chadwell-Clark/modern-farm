
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/Corn.js";
import { createPotato } from "./seeds/Potato.js";
import { createSoybean } from "./seeds/Soybean.js";
import { createWheat } from "./seeds/Wheat.js";
import { createSunflower } from "./seeds/Sunflower.js";
import { addPlant } from "./field.js";


export const plantSeeds = (plantingPlan) => {
    plantingPlan.forEach(row => {
        row.forEach(plant => {
            switch (plant) {
                case "Asparagus": addPlant(createAsparagus());
                    break;
                case "Corn": addPlant(createCorn());
                    break;
                case "Soybean": addPlant(createSoybean());
                    break;
                case "Wheat": addPlant(createWheat());
                    break;
                case "Potato": addPlant(createPotato());
                    break;
                case "Sunflower": addPlant(createSunflower());
                    break;
            }
        });
    }

    );
}