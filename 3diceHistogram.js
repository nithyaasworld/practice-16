//https://gist.github.com/McLarenCollege/0150e6f4cbd7416711c567dcc109010b
function histogram(diceThrows){
    let orderedResults = [...diceThrows].sort((a,b)=> b-a);
    let k=0;
    let printNumber = true;
    for(let i=0; i<=Math.max(...diceThrows); i++){
        for(let j=0; j<=diceThrows.length; j++){
            if(diceThrows[j] >= orderedResults[k]){
                if(printNumber && diceThrows[j]==orderedResults[k] && diceThrows[j] == (orderedResults[0]-i)){
                    process.stdout.write(orderedResults[k].toString() + " ");
                    if(!diceThrows.slice(j).includes(diceThrows[j])){
                        printNumber = false;
                    }  
                }else process.stdout.write("# ");
            }else process.stdout.write("  ");
        }
        console.log();
        if(orderedResults[k+1] && (orderedResults[0]-i-1)<=orderedResults[k+1]){
            k++;
            if(orderedResults[k+1] != orderedResults[k]){
                printNumber = true;
            }
        }
    }
    //To Print Line Separator
    let lineSeparator = new Array(diceThrows.length-1);
    lineSeparator.fill('--');
    console.log(lineSeparator.join('')+'-');
    //To Print last number-rows
    console.log(Array.from({length: diceThrows.length},(_,k) => k+1).join(' '));
    console.log();
}
histogram([7,3,3,1,0,5]);
histogram([1, 1, 0, 0, 0, 2])
