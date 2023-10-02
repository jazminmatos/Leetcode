// https://leetcode.com/problems/two-sum/

/* 
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. You may assume that each input would have exactly one solution, 
and you may not use the same element twice. You can return the answer in any order. 
*/

function twoSum(nums, target) {
    // Create map where key is (nums values) and value is (nums indices)
    // Input: nums = [2,7,11,15]
    // Map: {2 => 0, 7 => 1, 11 => 2, 15 => 3}
    const map = new Map ()

    // Check if map has the key/value pair of the difference between target and current number (nums[i])
    // If not, add current number and its index to map
    // If so, return the difference's index and the current number's index
    for (let i = 0; i < nums.length; i++) {
        // Keys cannot be less than 0. Map is retrieving via keys. Hence, we need '>= 0'
        if (map.get(target - nums[i]) >= 0) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)            
        }
    }
};

module.exports = twoSum;