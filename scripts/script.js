const PI = 3.1415;
const radius = 5;
const eachPlantSpace = 0.8;
const startingNumPlants = 20;
const gardenArea = (PI * radius ** 2) / eachPlantSpace;
console.log(`Garden area: ${gardenArea} m²`);

function analyzeWeek(weekNumber) {
    // Calculate plant count (doubles each week)
    const plantCount = startingNumPlants * Math.pow(2, weekNumber);
   


    const capacityPercentage = (plantCount / gardenArea) * 100;
 
    

    console.log(`\nWeek ${weekNumber}: ${plantCount} plants (${capacityPercentage.toFixed(1)}% capacity)`);
    


    if (capacityPercentage > 80) {
        console.log("ACTION: PRUNE");
    } else if (capacityPercentage >= 50) {
        console.log("ACTION: MONITOR");
    } else {
        console.log("ACTION: PLANT MORE");
    }
}

// Run for weeks 1, 2, and 3
analyzeWeek(1);
analyzeWeek(2);
analyzeWeek(3);