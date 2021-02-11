// Problem statement: https://gist.github.com/McLarenCollege/48d51b9e9b91ccdae0853dfd1be852d4
function snail(inputArr){
    let arr = JSON.parse(JSON.stringify(inputArr)); //Making a copy of the given 2d array
    let snailedArr = [];
    while(arr.length > 1){
        snailedArr.push(...arr.shift()); 
        let lastRow = arr.pop().reverse();
        for(let i=0; i<arr.length; i++){ //Traverse through the right-end of the matrix from top to bottom
            snailedArr.push(arr[i].pop());
        }
        console.log(arr);
        console.log(snailedArr);
        snailedArr.push(...lastRow); // Add the last row in reverse order
        for(let i= (arr.length-1 >= 0 ? arr.length-1 : 0) ; i>=0; i--){ //Traverse through the matrix bottom to top and add all the first-elements
            snailedArr.push(arr[i].shift());
        } 
    }
    snailedArr.push(...arr.flat());
    return snailedArr;
}

//Testcases
// let arr1 = [[1,2,3], [4,5,6], [7,8,9]];
// let arr2 = [[1,2,3,1], [4,5,6,4], [7,8,9,7], [7,8,9,7]];
// console.log(snail(arr1));
// console.log("--------------------");
// console.log(snail(arr2));
// console.log("--------------------");
// console.log(snail([[1,2,3]]));
// console.log("--------------------");
// console.log(snail([[2,3],[4,5]]));
// console.log("--------------------");
// console.log(snail([]));
// console.log("--------------------");
// console.log(snail([[]]));
// console.log("--------------------");


// console.log(snail(
//     [[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]))
// console.log(snail(
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]))
// console.log(snail([[]]))
// console.log(snail([
//     [1, 2, 3, 4],
//     [8, 7, 6, 5],
//     [9, 10, 11, 12],
//     [16, 15, 14, 13]
// ]))
console.log(snail([[7],[9],[6]]));