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


// Solution #2: Creates a fixed nested array
// Time Complexity: O(n * m)
// When you create a dynamic array - let a = [] - and add an item to the array, under the hood, it will: 
// 1. loop over current items in the array, 
// 2. copy them, 
// 3. move it to a different location in memory that has more space, so that it can include the newly added item
// When dynamic arrays need to be moved to expand its size, Array.prototype.push(n) becomes O(n) instead of O(1).
var transposeWithFixedArray = function (matrix) {
    let output = new Array(matrix[0].length).fill(null).map(item => new Array(matrix.length).fill(null));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            output[j][i] = matrix[i][j];
        }
    }

    return output;
}

module.exports = transpose