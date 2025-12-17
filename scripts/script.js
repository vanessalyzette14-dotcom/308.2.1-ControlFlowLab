/* what do we know
area is circular
cont PI = 3.1415;
const area = PI * radius ** 2
plantspace = 0.8
plants double each week
radius = 5
pruned % > 80
monitored 50 <= % <= 80
planted % <50%
What do they expect back what is the output?
String advises action

can we infer anything?
Constant Variables*/


// const PI = 3.1415;
// const radius = 5;
// const eachPlantSpace = 0.8;
// const startingNumPlants = 20;
// const gardenArea = (PI * radius ** 2) / eachPlantSpace;
// console.log(`Garden area: ${gardenArea} m²`);

// function analyzeWeek(weekNumber) {
//     // Calculate plant count (doubles each week)
//     const plantCount = startingNumPlants * Math.pow(2, weekNumber);
   


//     const capacityPercentage = (plantCount / gardenArea) * 100;
 
    

//     console.log(`\nWeek ${weekNumber}: ${plantCount} plants (${capacityPercentage.toFixed(1)}% capacity)`);
    


//     if (capacityPercentage > 80) {
//         console.log("ACTION: PRUNE");
//     } else if (capacityPercentage >= 50) {
//         console.log("ACTION: MONITOR");
//     } else {
//         console.log("ACTION: PLANT MORE");
//     }
// }

// // Run for weeks 1, 2, and 3
// analyzeWeek(1);
// analyzeWeek(2);
// analyzeWeek(3);


// What do we know?
// area is circular
//const PI = 3.1415;
// const area = PI * radius * radius;
// starting plants 20
// plantspace = 0.8
// plants double each week
// radius = 5
// Pruned % > 80
// Monitored 50 <= % <= 80
// Planted % < 50%
// What do they expect back (what is the output)?
// String advises action
// Can we infer anything?
// Constant Variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const startingPlants = 100;
const spacePerPlant = 0.8;

// Dynamic Variables
let week = 10;


let totalPlantPossible = area / spacePerPlant;
console.log("Total Plants Possible:", totalPlantPossible);

// Logic
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

  console.log("📊 Current Percent:", percentage + "%");

  //   IF percentage > 80 print prune
  if (percentage > 80) {
    console.log("Prune");
  } else if (percentage >= 50) {
    console.log("Monitor");
  } else {
    console.log("Plant");
  }
} catch (err) {
  console.error(`❌ Error: ${err.message}`); // Fancy way to print/log errors to the console.
}