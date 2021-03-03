// Problem Statement: https://gist.github.com/McLarenCollege/f6b06a9216bf3cadcdc994c83c26ba3b
function solution(str){
    if(str[0] === str[0].toUpperCase()) return 'invalid';
    let result = [str[0]];
    let camelCaseFound = false;
    for(let i=1; i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){ 
            if(camelCaseFound) return 'invalid'; //as there are more than one UpperCase Character
            result.push(' ');
            camelCaseFound = true;
        }
        result.push(str[i]);
    }
    return result.join('');
}
console.log(solution("camelCasing"));  // camel Casing
console.log(solution("somethingHERE")); // invalid input
console.log(solution("SomethingHere")); // invalid input
console.log(solution("somethingHere")); // something Here