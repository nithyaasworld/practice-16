// https://gist.github.com/McLarenCollege/2033f1b186523104c8f0706f223f413f
function PrimeFactorExpression(num){
    let currPrime = 2;
    let result = [];
    
    while(num != 1){
        while(num % currPrime === 0){
            num /= currPrime;
            result.push(currPrime);
        }
        currPrime = findNextPrime(currPrime);
    }

    return result.join(' * ');
}

//Helper function
function findNextPrime(n){
    let result = n+1;
    let broken = false;
    while(true){
        for(let i=2; i<result; i++){
            if (result % i === 0) {
                result++;
                broken = true;
                break;
            }
        }
        if(broken) broken = false;
        else return result;
    }
}

console.log(PrimeFactorExpression(21000)); // returns 2 * 2 * 2 * 3 * 5 * 5 * 5 * 7
console.log(PrimeFactorExpression(420)); // returns 2 * 2 * 3 * 5 * 7
console.log(PrimeFactorExpression(656099)); //returns 809 * 811
console.log(PrimeFactorExpression(806573)); //return 809 * 997


