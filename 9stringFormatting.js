// Problem Statement https://gist.github.com/McLarenCollege/138b5ddb14a81d23fdb7c1bcf9865b85

// I misunderstood that we should not use the inbuild properties like replace, find, etc and complicated my solution.
// Please use my previous version for rating. I submitted this code after the time was over.
function format(givenStr, object){
    let formatedString = givenStr; 
    for(let i in object){
        formatedString = formatedString.replace('{' + i + '}' , object[i]);
    }
    return formatedString;
}


var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

console.log(format(s, o)); // "Hello Jack - make me a sandwich"

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

console.log(format(s, a)); // "Hello Jack - make me a sandwich"


var s = 'Hello {0} - make me a {1}';
var a = ['Jack', '{0} sandwich'];

console.log(format(s, a)); // "Hello Jack - make me a {0} sandwich"