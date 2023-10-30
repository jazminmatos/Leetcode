/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = []
    let result = 0

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            stack.push(parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2]))
        } else if (operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        } else if (operations[i] === 'C') {
            stack.pop()
        } else {
            stack.push(operations[i])
        }
    }

    for (let num of stack) {
        result += parseInt(num)
    }
    
    return result
};