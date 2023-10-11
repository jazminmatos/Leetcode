// https://leetcode.com/problems/reverse-string/description/

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

// Solution in-place with pointers
var solution1 = function (s) {
    let n = s.length
    let left = 0
    let right = n - 1

    while (left < right) {
        let temp = s[left]
        s[left++] = s[right] // DON'T DECREMENT right until AFTER setting temp to s[right]
        s[right--] = temp
    }

    return s
}


// Solution in-place but without pointers
var solution2 = function (s) {
    for (let i = 0; i < s.length - 1; i++) {
        // remove 0 items at index 'i' AND
        // remove the last item of array 's' and add it at index i
        // splice(start, deleteCount, item1, item2, /* …, */ itemN)
        s.splice(i, 0, s.pop(s))
    }
    return s
}

// Works, but leetcode doesn't accept it b/c it requires that I 
var solution3 = function (s) {
    let reverse = []

    for (let i = 0; i < s.length; i++) {
        reverse.unshift(s[i])
    }

    return reverse
};

module.exports = {
    solution1,
    solution2,
    solution3
}