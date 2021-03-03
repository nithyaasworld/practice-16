function knight(startPoint, endPoint){
    let col = {a : 0, b : 1, c : 2, d : 3, e : 4, f : 5, g : 6, h : 7};
    let offsets = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
    let visitedArr = Array.from(Array(8), () => new Array(8).fill(false));
    startPoint = [col[startPoint[0]], startPoint[1]-1];
    endPoint = [col[endPoint[0]], endPoint[1]-1];
    let moves = 0;
    if(startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]) return moves;
   
    let queue = [startPoint];
    visitedArr[startPoint[0]][startPoint[1]] = true;

    while(queue.length > 0){
        moves++;
        let currentQueue = queue.slice(0);
        while(currentQueue.length > 0){
            let currentItem = currentQueue.shift();
            for(let i=0; i<offsets.length; i++){
                let newItem = [currentItem[0]+offsets[i][0], currentItem[1] + offsets[i][1]];
                if(isValid(newItem) && visitedArr[newItem[0]][newItem[1]] === false){
                    visitedArr[newItem[0]][newItem[1]] = true;
                    queue.push(newItem);
                    if(newItem[0] === endPoint[0] && newItem[1] === endPoint[1]) return moves;
                }
            }
        }
    }
    function isValid(point){
        return point[0] >=0 && point[1] >= 0 && point[0] < 8 && point[1] < 8;
    }
}
// console.log(knight("a3", "b5")); // returns 1
// console.log(knight("a1", "c1")); // returns 2
// console.log(knight("a1", "f7")); // returns 5
console.log(knight("b7", "a8")); // returns 2