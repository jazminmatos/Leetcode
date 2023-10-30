/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // only add open parenthesis if open < n
    // only add close parenthesis if closed < open
    // valid combination if open === closed === n
    let stack = []
    let result = []

    function backtrack(openN, closedN) {
        // base case
        if (openN === closedN && openN === n && closedN === n) {
            result.push(stack.join(""))
        }

        if (openN < n) {
            stack.push('(')
            backtrack(openN + 1, closedN)
            stack.pop()
        }

        if (closedN < openN) {
            stack.push(')')
            backtrack(openN, closedN + 1)
            stack.pop()
        }
    }
    backtrack(0, 0)
    return result
};