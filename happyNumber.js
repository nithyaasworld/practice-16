function solve(nums) {
    let i = 1;
    let result = 0;
    while(i<=nums.length){
        for(let j=0; j<nums.length; j++){
            if(j+i > nums.length){
                break;
            }
                result += nums.slice(j,j+i).reduce((a,b) => a+b);
        }
        i++;
    }
    return result;
} 

console.log(solve([2, 3, 5]));