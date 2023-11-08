/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = []

    while (arr.length > 0) {
        arr.shift()
        let max = Math.max(...arr)
        if (arr.length != 0) {
            result.push(max)
        } else {
            result.push(-1)
        }
    }
    return result
};