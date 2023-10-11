// https://leetcode.com/problems/contains-duplicate/

/* 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

// (1 of 2) Solution using Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicateSetSolution(nums) {
    const numSet = new Set(nums)

    // if length of set != length of array return true
    return numSet.size != nums.length
}

// (2 of 2) Solution using sorting & for loop
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function containsDuplicateLoopSolution(nums) {
    // Sort array
    nums.sort((a, b) => a - b)

    // Loop through sorted array & check if a number is the same as the next one
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
}

module.exports = {
    containsDuplicateSetSolution, 
    containsDuplicateLoopSolution
}