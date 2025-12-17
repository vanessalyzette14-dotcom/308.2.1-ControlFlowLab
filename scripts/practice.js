// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const startingPlants = 20;
const spacePerPlant = 0.8;

let week = 1;

let totalPlantPossible = area / spacePerPlant;
console.log("Total Plants Possible:", totalPlantPossible);

try {
  if (typeof week != "number")
    throw new Error(`Week (${week}) has to be type number`);

  // Calculate plants that week
  let plantPerWeek = startingPlants * 2 ** week;

  // Calculate area of current plants
  let currentPlantSpace = plantPerWeek * spacePerPlant;
  console.log('CurrentSpaceForPlants:', currentPlantSpace)

  // Calculate Percentage
  let percentage = (plantPerWeek / totalPlantPossible) * 100;

  console.log("Current Percent:", percentage + "%");

  //   IF percentage > 80 print prune
  if (percentage > 80) {
    console.log("Prune");
  } else if (percentage >= 50) {
    console.log("Monitor");
  } else {
    console.log("Plant");
  }
} catch (err) {
  console.error(`❌ Error: ${err.message}`); 
}



