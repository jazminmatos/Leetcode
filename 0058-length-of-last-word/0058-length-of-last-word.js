/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArray = s.trim().split(" ")
    return sArray[sArray.length - 1].length
};