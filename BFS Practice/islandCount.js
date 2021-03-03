function islandCount(islandArr){
 let visitedArr = Array.from(Array(islandArr.length), () => Array(islandArr[0].length).fill(false));
 let offsets = [[-1,0],[1,0],[0,-1],[0,1]];
 let numOfIslands = 0;
 for(let i=0; i<islandArr.length; i++){
     for(let j=0; j<islandArr[0].length; j++){
        if(islandArr[i][j] === 1 && visitedArr[i][j] === false){
            visitedArr[i][j] = true;
            findNeighbourIslands(i,j);
            numOfIslands++;
        }
     }
 }
 return numOfIslands;
 function findNeighbourIslands(i,j){
     let queue = [[i,j]];
     while(queue.length >0){
         let currentItem = queue.shift();
        offsets.forEach(offset =>{
            let newItem = [currentItem[0]+offset[0], currentItem[1]+offset[1]];
            if(isValid(newItem) && islandArr[newItem[0]][newItem[1]]===1 && visitedArr[newItem[0]][newItem[1]] === false){
                visitedArr[newItem[0]][newItem[1]] = true;
                queue.push(newItem);
            }
        })
     }
 }
 function isValid([i,j]){
    return i>=0 && j>=0 && i<islandArr.length && j<islandArr[0].length
 }
}
console.log(island([[1,0,0,1],[1,1,1,0],[0,0,0,1]])); // returns 3
// [1,0,0,1]
// [1,1,1,0]
// [0,0,0,1]

console.log(island([[1,1,1,1],[0,0,1,0],[1,0,1,1]])); // returns 2