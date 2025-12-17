// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
const radius = 5
const PI = 3.1415;
const fullGarden = PI * radius * radius;
const minPerPlantSpace = 0.8;
const startingPlants = 20;


let weeks = 2;
let plantsPerWeek = startingPlants * 2 ** weeks;  
let maxPlants = fullGarden / minPerPlantSpace;   

if (plantsPerWeek > maxPlants * 0.8) {
    console.log("PRUNE");
} else if (plantsPerWeek > maxPlants * 0.5) {
    console.log("MONITOR");
} else {
    console.log("PLANT MORE");  
}




