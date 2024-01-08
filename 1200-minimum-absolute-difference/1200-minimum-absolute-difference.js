/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let output = []

    // sort array in place
    arr.sort((a, b) => a - b)

    let minimum = Infinity

    for (let i = 0; i < arr.length; i++) {
        let difference = Math.abs(arr[i + 1] - arr[i]) 

        if (difference < minimum) {
            // update minimum
            minimum = difference
            // update output with array values
            output = [[arr[i], arr[i + 1]]]
        } else if (minimum === difference) {
            output.push([arr[i], arr[i + 1]])
        }
    }
    return output
};