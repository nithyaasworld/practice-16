// https://gist.github.com/McLarenCollege/922955534646cc73ea664c9bb67a453d
function add(str1, str2){
    let numWithMaxDigit = str1.length > str2.length ? str1.length : str2.length;
    let carryOver = 0;
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
    let result = [];
    for(let i=0; i<numWithMaxDigit; i++){
        let addedTogether = (str1[i] ? Number(str1[i]) : 0 ) + ( str2[i] ? Number(str2[i]) : 0 );
        if(addedTogether+carryOver > 9){
            result.push((addedTogether + carryOver)%10);
            carryOver = 1;
        }else{
            result.push(addedTogether + carryOver );
            carryOver = 0; 
        }
    }
    result = result.reverse().join('');
    return carryOver ? carryOver.toString() + result : result ;
}
console.log(add('129', '329')); //-> "458"
console.log(add('63829983432984289347293874', '9')); //-> "63829983432984289347293883")
console.log(add('1', '9'));
console.log(add('9', '99'));