// https://leetcode.com/problems/contains-duplicate/

/* 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

// (1 of 2) Solution using Set
function containsDuplicateSetSolution(nums) {
    const numSet = new Set(nums)

    // if length of set != length of array return true
    return numSet.size != nums.length
}

// (2 of 2) Solution using sorting & for loop
function containsDuplicateLoopSolution(nums) {
    // Sort array
    let sortedNums = nums.sort((a, b) => a - b)

    // Loop through sorted array & check if a number is the same as the next one
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            return true
        }
    }
    return false
}

module.exports = {
    containsDuplicateSetSolution, 
    containsDuplicateLoopSolution
}