//Problem statement: https://gist.github.com/McLarenCollege/72343cbbad5a3eafb5b10bb15bde8254
function antBridge(ants, terrain){
    let antFormation = ants.slice(0); //copying the given ants
    let gapArray = terrain.split('-').reduce((a,v) => v ? (a.push(v), a) : a , []);
    gapArray.forEach(gap => {
        let antsForMakingBridge = gap.length + 2;
        let antsThatCanCross = antFormation.length - antsForMakingBridge;
        let crossedAnts = antFormation.slice(0, antsThatCanCross);
        let antsInTheGap =  antFormation.slice(antsThatCanCross);
        antFormation = antsInTheGap + crossedAnts;
    });
    return antFormation;
}
let ants = "GFEDCBA";
let terrain = '-----------...---------';
console.log(antBridge(ants, terrain)); // returns EDCBAGF

let ants2 = "ABCDE";
let terrain2 = '---..-.-.--';
console.log(antBridge(ants2,terrain2)); // returns CBEAB