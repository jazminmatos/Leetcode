// https://leetcode.com/problems/transpose-matrix/

/* 
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
*/

var transpose = function (matrix) {
    const newMatrix = []

    for (let i = 0; i < matrix[0].length; i++) {
        let currArr = []

        for (let j = 0; j < matrix.length; j++) {
            currArr.push(matrix[j][i])
        }

        newMatrix.push(currArr)
    }
    return newMatrix
};

module.exports = transpose
