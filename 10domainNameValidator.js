function validate(input){
let inputArr = input.split('');
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let validChars = [...alphabets.split(''), ...alphabets.toUpperCase().split(''),...'0123456789'.split(''),'-','.'];

if(!inputArr.slice(1,input.length-2).includes('.')
    || input.includes('..')
    || input[0] === '-'
    || input[input.length-1] === '-'
    || input.length > 255
    || inputArr.some(letter => !validChars.includes(letter))
    || inputArr.slice(inputArr.lastIndexOf('.')+1).every(letter => [...'0123456789'.split('')].includes(letter))
    || inputArr[0] === '.'
    || inputArr.slice(0,inputArr.indexOf('.')).length > 63
    || inputArr.map(letter => letter === '.' ? letter : '').join('').length > 125)  {
     return false;
 }
 return true;
}

console.log(validate('codewars')) // false
console.log(validate('g.co')) // true
console.log(validate('codewars.com')) // true
console.log(validate('CODEWARS.COM')) // true
console.log(validate('sub.codewars.com')) // true
console.log(validate('codewars.com-')) // false
console.log(validate('.codewars.com')) // false
console.log(validate('example@codewars.com')) // false
console.log(validate('127.0.0.1')) // false
console.log(validate('example.c')) // false
console.log(validate('sub.codewars.com')) // true
console.log(validate('1.1.168.192.in-addr.arpa')) // false