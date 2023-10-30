/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// brute force solution
// var dailyTemperatures = function(temperatures) {
//     let result = Array(temperatures.length).fill(0)
   
//     for (let i = 0; i < temperatures.length; i++) {
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 result[i] = j - i
//                 break
//             }
//         }
//     }

//     return result
// };

// Monotonic Stack Solution
// Keep track of indices w/ stack. Once we encounter temperature which is greater than what is at the top of the stack, we pop out the top of the stack and store the result as 'ans[index] = i - index'.
var dailyTemperatures = function(temperatures) {
    let stack = [], ans = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};