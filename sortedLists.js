function solve(lists){
  while(lists.length == 1){
      combine(lists[0],lists[1],lists);
  }
  
}
console.log(solve([
    [],
    [],
    [10, 12],
    [],
    [3, 3, 13],
    [3],
    [10],
    [0, 7]
]));