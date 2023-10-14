// https://leetcode.com/problems/toeplitz-matrix/description/

/* 
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/

var isToeplitzMatrix = function (matrix) {
    let rows = matrix.length - 1
    let columns = matrix[0].length - 1

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (matrix[row][column] != matrix[row + 1][column + 1]) {
                return false
            }
        }
    }
    return true
};

// Example: 4 x 4 matrix
// m = [[1,2,3,4],
//      [5,1,2,3],
//      [9,5,1,2],
//      [0,9,5,1]]

// Example m: 4 x 4 matrix
//  1  | [0][0]   [1][1]   [2][2]   [3][3] --- row + 1 && column + 1

//  2  | [0][1]   [1][2]   [2][3]          --- row + 1 && column + 1

//  3  | [0][2]   [1][3]                   --- row + 1 && column + 1

//  5  | [1][0]   [2][1]   [3][2]          --- row + 1 && column + 1

// Example 1: 4 x 3 matrix
//  1  | [0][0]   [1][1]   [2][2]

//  2  | [0][1]   [1][2]   [2][3]

//  3  | [0][2]   [1][3]

//  5  | [1][0]   [2][1]