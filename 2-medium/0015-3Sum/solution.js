// https://leetcode.com/problems/3sum/description/

/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function (nums) {
    // sort nums
    // loop through sorted nums
    // Create a Map object of {value: frequency}
    // keep track of 3 pointers: x, y, z
    // nested for loop? OR (for loop & nested while loop)
    // x stays constant, use two pointers - start end

    const result = []
    const check = new Set()

    // sort nums in ascending order
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        let start = i + 1
        let end = nums.length - 1

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            // If the numbers add up to 0, add to result
            if (sum === 0) {
                // Sets can have duplicate arrays unfortunately
                // So, you can use strings to take advantage of unique values in Sets
                let key = `${nums[i]} ${nums[start]} ${nums[end]}`
                if (!check.has(key)) {
                    check.add(key)
                    result.push([nums[i], nums[start], nums[end]])
                }
                start++
                end--
            }
            if (sum < 0) start++
            if (sum > 0) end--
        }
    }
    return result
};

module.exports = threeSum