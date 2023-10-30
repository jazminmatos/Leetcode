/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// brute force solution
var dailyTemperatures = function(temperatures) {
    let result = Array(temperatures.length).fill(0)
   
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                result[i] = j - i
                break
            }
        }
    }

    return result
};