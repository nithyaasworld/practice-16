function undoRedo(object) {
  
    let undoQueue = [];
    let redoQueue = [];
    
      return {
          set: function(key, value) {
            undoQueue.push(['add', key, object[key], value]);
            object[key] = value;
            redoQueue = [];
          },
          get: function(key) { return object[key]},
          del: function(key) { 
            undoQueue.push(['del', key, object[key]]);
            delete object[key];
            redoQueue = [];
          },
          undo: function() {
            if(!undoQueue[0]) {
               console.error("There is nothing to undo");
            }else {
                let lastAction = undoQueue.pop();
                if(lastAction[0] === 'add'){
                    if(!lastAction[2]) delete object[lastAction[1]]
                        else object[lastAction[1]] = lastAction[2];
                }else if(lastAction[0] === 'del'){
                    object[lastAction[1]] = lastAction[2];
                }
                redoQueue.push(lastAction);
            }
     
          },
          redo: function() {
              //console.log('redo Queue is: ', redoQueue);
              if(!redoQueue[0]) {
                console.error("There is nothing to redo");
             }else {
                 let lastUndo = redoQueue.pop();
                 if(lastUndo[0] === 'add'){
                    object[lastUndo[1]] = lastUndo[3];
                 }else {
                     delete object[lastUndo[1]];
                 }
                 undoQueue.push(lastUndo);
             }
          }

      };
  }

let obj = { x: 1, y: 2 };
let unRe = undoRedo(obj);
  
// console.log(unRe.get('x')); // returns 1
// unRe.set('x', 3);
// console.log(unRe.get('x')); // returns 3

// unRe.set('y', 10);
// console.log(unRe.get('y')); // returns 10
// unRe.undo();
// console.log(unRe.get('y')); // returns 2
// unRe.undo(); // throws exception
// console.log(unRe.get('y')); // returns 2

// unRe.set('y', 10);
// console.log(unRe.get('y')); // returns 10
// unRe.redo(); 
// unRe.undo();
// console.log(unRe.get('y')); // returns 2
// unRe.redo();
// console.log(unRe.get('y')); // returns 10

// unRe.del('y');
// console.log(unRe.get('y')); //returns undefined
// unRe.undo();
// console.log(unRe.get('y')); // returns 2
// unRe.redo();
// console.log(unRe.get('y')); // returns undefined


unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
console.log(unRe.get('y')) // returns 100
console.log(unRe.get('x')) // returns 50
unRe.undo();
console.log(unRe.get('x')) // returns 150
console.log(unRe.get('y')) // returns 100
unRe.redo();
console.log(unRe.get('x')) // returns 50
console.log(unRe.get('y')) // returns 100
unRe.undo();
unRe.undo();
console.log(unRe.get('x')) // returns 1
console.log(unRe.get('y')) // returns 100
// unRe.undo();
// unRe.undo();
// console.log(unRe.get('y')) //2, 'Undo the y value');
// console.log(unRe.get('x')) //1, 'The x key stays the same');
// try {
//   unRe.undo();
//   Test.expect(false, 'It should have thrown an exception');
  
// } catch (e) {
//   Test.assertEquals(unRe.get('y'), 2, 'There is nothing to undo');
// }
// unRe.redo();
// unRe.redo();
// unRe.redo();
// unRe.redo();
// Test.assertEquals(unRe.get('y'), 100, 'y key redo state');
// Test.assertEquals(unRe.get('x'), 50, 'y key redo state');
// try {
//   unRe.redo();
//   Test.expect(false, 'It should have thrown an exception');
  
// } catch (e) {
//   Test.assertEquals(unRe.get('y'), 100, 'There is nothing to redo');
// }