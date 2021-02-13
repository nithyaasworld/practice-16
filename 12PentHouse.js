//Problem statement: https://gist.github.com/McLarenCollege/a2da9c0bfe109b35c00f9aa97d4a1d02

function buildPentHouse(floor){
    let pentHouse = []
    //1. Making the Roof Part
    let numberOfRoofTiles = floor === 1 ? 5 : 5 + (6*(floor-1));
    let roofTiles = new Array(numberOfRoofTiles).fill('_').join('');
    let firstRoof = "/" + roofTiles +  "\\";
    let allRoofs = [];
    let i = floor * 2;
    let j = 1;
    while(i>0){
        let currentRoof = new Array(j).fill(" ");
        currentRoof =  currentRoof.concat(firstRoof).join('').split('');
        for(let k=0; k < j*2; k++){
            let index = currentRoof.indexOf('_');
            currentRoof.splice(index,1);
        }
        allRoofs.push(currentRoof.join(''));
        i--;
        j++;
    }
    allRoofs = allRoofs.reverse();

    //making the top roof
    let topRoof = allRoofs[0].split('');
    topRoof[topRoof.indexOf('/')] = '_';
    topRoof[topRoof.indexOf('\\')] = '_';
    allRoofs[0] = topRoof.join('');  
    
    for(let i in allRoofs){
        pentHouse.push(allRoofs[i]);
        pentHouse.push('\n');
    }
    pentHouse.push(firstRoof);
    pentHouse.push('\n');

    //2. Making the bottom part

    //making the row below the roof;
    let r = floor - 1;
    while(r>0){
        pentHouse.push(['|',...new Array(floor*2 - 1).fill(' '),
        ' ',...new Array(floor*2 - 1).fill(' '),
        ' ',...new Array(floor*2 - 1).fill(' '), '|'].join(''));
        pentHouse.push('\n');
        r--;
    }
    //making the top door part
    pentHouse.push(['|',...new Array(floor*2 - 1).fill(' '),
    ' ',...new Array(floor*2 - 1).fill('_'),
    ' ',...new Array(floor*2 - 1).fill(' '), '|'].join(''));
    pentHouse.push('\n');

    //making the middle door part
    let k = floor - 1;
    while(k>0){
        pentHouse.push(['|',...new Array(floor*2 - 1).fill(' '),
        '|',...new Array(floor*2 - 1).fill(' '),
        '|',...new Array(floor*2 - 1).fill(' '), '|'].join(''));
        pentHouse.push('\n');
        k--;
    }

    let bottomRow = ['|',...new Array(floor*2 - 1).fill('_'),
    '|',...new Array(floor*2 - 1).fill('_'),
    '|',...new Array(floor*2 - 1).fill('_'), '|'].join('');
    
    pentHouse.push(bottomRow);
    return pentHouse.join('');
}
console.log(buildPentHouse(1));
console.log(buildPentHouse(2));
console.log(buildPentHouse(3));
