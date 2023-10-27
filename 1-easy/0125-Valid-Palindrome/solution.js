// https://leetcode.com/problems/valid-palindrome/description/

/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function (s) {
    if (s.length < 1) return true

    // Make every letter lowercase
    // Convert string into array
    let sArray = s.toLowerCase().split("")

    // Remove every non-alphanumeric characters
    for (let i = 0; i < sArray.length; i++) {
        // Ascii Values 0-9 are 48-57
        if (sArray[i].charCodeAt(0) > 47 && sArray[i].charCodeAt(0) < 58) {
            continue
        }
        // Ascii Values a-z are 97-122
        if (sArray[i].charCodeAt(0) > 96 && sArray[i].charCodeAt(0) < 123) {
            continue
        }
        // splice() removes item from array in place
        // When removing in place, we need to subtract 1 from i so that the for loop doesn't 
        // skip the following item after removing the current item we're looking at
        sArray.splice(i, 1)
        i--
    }

    // Convert back to string w/ no non-alphanumeric characters
    let newS = sArray.join("")

    // Keep track of pointers
    let left = 0
    let right = newS.length - 1

    // Compare the beginning of newS to the end of newS with pointers
    while (left < right) {
        if (newS[left] != newS[right]) {
            return false
        }
        left++
        right--
    }
    return true
};

module.exports = isPalindrome