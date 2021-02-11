 class VigenereCipher {
     constructor(key, alphabet){
        this.key = key;
        this.alphabet = alphabet;
     }
    encode(input){
        let result = input.split('').map((char,i) => {
                        if(alphabet.indexOf(char) === -1) return char;
                        i = (i < key.length) ? i : i%key.length;
                        let finalIndex = alphabet.indexOf(char) + alphabet.indexOf(key[i]);
                        if (finalIndex < alphabet.length) return alphabet[finalIndex];
                        else return alphabet[finalIndex%alphabet.length];
                    });
        return result.join('');
     }
    decode(input){
        let result = input.split('').map((char,i) => {
                        if(alphabet.indexOf(char) === -1) return char;
                        i = (i < key.length) ? i : i%key.length;
                        let finalIndex = alphabet.length + alphabet.indexOf(char) - alphabet.indexOf(key[i]);
                        if(finalIndex < alphabet.length) return alphabet[finalIndex];
                        else return alphabet[finalIndex%alphabet.length];
                    });
        return result.join('');
     }
 }

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'pizza';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var testing = new VigenereCipher(key, alphabet);

// console.log(testing.encode('codewars')); // returns 'rovwsoiv'
// console.log(testing.decode('laxxhsj'));  // returns 'waffles'
// console.log(testing.encode('CODEWARS')); // returns 'CODEWARS'
// console.log(testing.decode('CODEWARS')); // returns 'CODEWARS'

console.log(testing.decode('pancakes')) // === 'asodavwt');
console.log(testing.decode('yiuzsrzhot')) // === 'javascript');
console.log(testing.encode('javascript')) // === 'yiuzsrzhot');