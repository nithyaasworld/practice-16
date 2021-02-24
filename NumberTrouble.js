function maxRemainder(a,k){
    let maxRemainder = k-1;
    let currentHighest = 0;
    let [even, odd] = a.reduce((a,v) => (v%2===0 ? a[0].push(v%k) : a[1].push(v%k), a),[[],[]]);

    even = [... new Set(even)];
    odd = [... new Set(odd)];
    console.log(even);
    console.log(odd);

<<<<<<< HEAD
    //Comparing the even and odd arrays
=======
>>>>>>> 232249de97e3ef99b8938c66868fe889daab688e
    for(let i=0; i<even.length; i++){
        for(let j=0; j<odd.length; j++){
            let modResult = (even[i] + odd[j] ) % k;
            if(modResult === maxRemainder){
                return maxRemainder;
            }
            if(modResult > currentHighest){
                currentHighest = modResult;
            }
        }
    }

    return currentHighest;
}

console.log(maxRemainder([11,21,3,47,35,6,70,18,98,10], 100));


