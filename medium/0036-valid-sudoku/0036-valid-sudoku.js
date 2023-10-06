// https://leetcode.com/problems/valid-sudoku/description/

/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according 
to the following rules:

*Each row must contain the digits 1-9 without repetition.
*Each column must contain the digits 1-9 without repetition.
*Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

function isValidSudoku(board) {
    let seen = new Set();
    
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            let num = board[row][column]

            if (num === ".") continue

            if (seen.has(`${num} in row ${row}`) || 
                seen.has(`${num} in column ${column}`) ||
                seen.has(`${num} in subBox (${Math.floor(row/3)}/${Math.floor(column/3)})`)) {

                return false
            } else {
                seen.add(`${num} in row ${row}`)
                seen.add(`${num} in column ${column}`)
                seen.add(`${num} in subBox (${Math.floor(row/3)}/${Math.floor(column/3)})`)
            }
        }
    }
    return true;
};

module.exports = isValidSudoku