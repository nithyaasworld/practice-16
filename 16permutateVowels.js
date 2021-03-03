//Problem Statement: https://gist.github.com/McLarenCollege/78e3e9217799be0eefd2ee6f76546f14
function wordGenerator(str){
    let vowels = ['a','e','i','o','u'];
    let vowelPos = findVowelPositions(); // gives us an object like this {0: 'a', 2:'e'}
    let numberOfVowels = Object.keys(vowelPos).length;
    let result = [];

    if(numberOfVowels === 1){
        vowels.forEach(vowel => {
            let word = str.split('');
            word.splice(Number(Object.keys(vowelPos)[0]),1,vowel);
            result.push(word.join('').toLowerCase());
        })
    }else if(numberOfVowels < 1) {
        result.push(str.toLowerCase());
    }else{
        result.push(str.toLowerCase());
        for(let i=0; i< numberOfVowels; i++){
            let subResult = [];
            result.forEach(result => {
                vowels.forEach(vowel => {
                    let word = result.split('');
                    word.splice(Number(Object.keys(vowelPos)[i]),1,vowel);
                    subResult.push(word.join('').toLowerCase());
                })
            })
            result.push(...subResult);
        }
    }
    return [... new Set(result)].sort();

    //Helper functions
    function findVowelPositions(){
        let vowelPositions = {};
        str.toLowerCase().split('').forEach((letter,i) => {
            if(vowels.includes(letter)){
                vowelPositions[i] = letter;
            }
        })
        return vowelPositions;
    }
}
console.log(wordGenerator("Pszczyna"));   //  ['pszczyna', 'pszczyne', 'pszczyni', 'pszczyno', 'pszczynu']
console.log(wordGenerator("aa"));   //  ['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'ii', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo','uu']
console.log(wordGenerator("B"));   //  ['b']
console.log(wordGenerator("Pseczyna"));  
console.log(wordGenerator("aei"));  