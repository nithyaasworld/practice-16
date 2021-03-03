function determinant(matrix){
    if(matrix.length <= 1){
        return matrix[0][0];
    }else if(matrix.length === 2){
        return (matrix[0][0] * matrix[1][1]) - (matrix[0][1]*matrix[1][0]);
    }else if(matrix.length > 2){
        let result = 0;
        for(let i=0; i<matrix.length; i++){
            let submatrix = JSON.parse(JSON.stringify(matrix.slice(1)));
            submatrix.forEach(row => {
                row.splice(i,1);
            })
            let subResult = matrix[0][i] * determinant(submatrix);
            if(i%2 !== 0) {
                result -= subResult;
            }else {
                result += subResult;
            }
        }
        return result;
    }
}

// console.log(determinant([1]));
// console.log(determinant([[2,3],[5,21]]));
console.log(determinant([[1,2,3],[4,5,6],[7,8,9]]));
