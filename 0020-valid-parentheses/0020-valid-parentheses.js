/**
 * @param {string} s
 * @return {boolean}
 */

// example: [{(){}}]
var isValid = function(s) {
    const isOpen = new Set(['(', '{', '['])
    const isClosed = new Set([')', '}', ']'])
    const stack = []

    for (let i = 0; i < s.length; i++) {
        // if open bracket? add to the end of stack
        if (isOpen.has(s[i])) {
            stack.push(s[i])
        }

        // if closed bracket? 
        // check if corresponding open bracket is at the top of the stack
            // if it is, remove open bracket from stack
            // if no match, return false 
        if (isClosed.has(s[i])) {
            if ((s[i] === ')' && stack[stack.length - 1] === '(') ||
                (s[i] === '}' && stack[stack.length - 1] === '{') ||
                (s[i] === ']' && stack[stack.length - 1] === '[')) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};