function antBridge(ants, terrain) {
    let antFormation = ants.split('');
    //making all the bridges 
    let antsInTheBridge = [];
    let formingTheBridge = false;
    let ranOutOfAnts = false;
    let i = 0
    makeTheBridge();
  
    while(ranOutOfAnts){
        antFormation = antsInTheBridge;
        antsInTheBridge = [];
        ranOutOfAnts = false;
        fillTheRemainingGaps();
    }
    return antsInTheBridge.reverse().join('') + antFormation.join('');

    function makeTheBridge(){
        while(i<terrain.length){
            if(!formingTheBridge){
                if(terrain[i+1] && terrain[i+1] === '.'){
                    formingTheBridge = true;
                    let currentAnt = antFormation.pop();
                    if(!currentAnt){
                        ranOutOfAnts = true;
                        break;
                    }                    
                    antsInTheBridge.push(currentAnt);
                }
            }else{
                let currentAnt = antFormation.pop();
                if(!currentAnt){
                    ranOutOfAnts = true;
                    break;
                }
                if(terrain[i+1] === '-'){
                    antsInTheBridge.push(currentAnt);
                    let nextAnt = antFormation.pop();
                    if(!nextAnt){
                        ranOutOfAnts = true;
                        break;
                    }
                    antsInTheBridge.push(nextAnt);
                    i++;
                    formingTheBridge = false;
                }else{
                    antsInTheBridge.push(currentAnt);
                }
            }
            i++;
        }
    }

    function fillTheRemainingGaps(){
        while(i<terrain.length){
            if(!formingTheBridge){
                if(terrain[i+1] && terrain[i+1] === '.'){
                    let currentAnt = antFormation.shift();
                    if(!currentAnt){
                        ranOutOfAnts = true;
                        break;
                    }
                    formingTheBridge = true;                    
                    antsInTheBridge.push(currentAnt);
                }
            }else{
                let currentAnt = antFormation.shift();
                if(!currentAnt){
                    ranOutOfAnts = true;
                    break;
                }
                if(terrain[i+1] === '-'){
                    antsInTheBridge.push(currentAnt);
                    let nextAnt = antFormation.shift();
                    if(!nextAnt){
                        ranOutOfAnts = true;
                        break;
                    }
                    antsInTheBridge.push(nextAnt);
                    i++;
                    formingTheBridge = false;
                }else{
                    antsInTheBridge.push(currentAnt);
                }
            }
        i++;
        }
    } 
}
// let ants3 = "GFEDCBA";
// let terrain3 = '-----------...---------';
// console.log(antBridge(ants3, terrain3));  // returns EDCBAGF

let ants2 = "ABCDE";
let terrain2 = '---..-.-.--';
console.log(antBridge(ants2,terrain2)); // returns CBEAB