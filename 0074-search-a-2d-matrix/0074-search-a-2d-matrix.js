/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length // m
    let c = matrix[0].length // n
    
    let left = 0
    let right = (r * c) - 1 // total number of elements in matrix


    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let midValue = matrix[Math.floor(mid / c)][mid % c]

        if (midValue === target) {
            return true
        } else if (midValue < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};

// matrix[0][0]

// 4 x 3
// [[ 1, 3, 5, 7],        [0][0]   [0][1]   [0][2]   [0][3]
//  [10,11,16,20],        [1][0]   [1][1]   [1][2]   [1][3]
//  [23,30,34,60]]        [2][0]   [2][1]   [2][2]   [2][3]

// first index: 0 - 2 OR (matrix.length - 1) (2)        ROW
// second index: 0 - 3 OR (matrix[0].length - 1) (3)    COLUMN

// if bigger than midpoint
    // if first index < matrix.length - 1 && second index < matrix[0].length - 1 && 
        // add + 1 to second index
    // ELSE (meaning I'm already looking at last item in the matrix [2][3])
        // target not found
// if smaller than midpoint, 
    // if first index
        //need to - 1 to second array index

// ELSE (if 2nd indx > matrix[0].length - 1)
    // if bigger than midpoint, need to + 1 to first index & set second index to 0
