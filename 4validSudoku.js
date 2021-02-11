// https://gist.github.com/McLarenCollege/6d97242faaef677668a09a757642500e
function DoneOrNot(sudoku){
    //To check the Rows
    if(sudoku.every(row => [...row].sort().join('') === "123456789" )){ 
        //To check the Columns
        if(validColumns(sudoku)){
            //To check the 3 x 3 Matrices
            for(let i=0; i<9; i=i+3){
                for(let j=0; j<9; j=j+3){
                    let threeGrid = [];
                    threeGrid.push(sudoku[i].slice(j,j+3));
                    threeGrid.push(sudoku[i+1].slice(j,j+3));
                    threeGrid.push(sudoku[i+2].slice(j,j+3));
                    if(threeGrid.flat().sort().join('') !== '123456789'){
                        return "Try again!";
                    }
                }
            }
            return "Finished!";
        }
    }
    return "Try again!";

    function validColumns(sudoku){
        for(let i=0; i<9; i++){
            let column = [];
            for(let j=0; j<9; j++){
                column.push(sudoku[j][i]);
            }
            if(column.sort().join('') !== '123456789'){
                return false;
            }
        }
        return true;
    }
}

let input = [
[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

console.log(DoneOrNot(input));