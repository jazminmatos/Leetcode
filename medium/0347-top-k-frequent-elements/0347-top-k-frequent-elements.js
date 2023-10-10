// https://leetcode.com/problems/top-k-frequent-elements/

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

function topKFrequent(nums, k) {
    // Create map
    // Map will track the number of times that a number will show up
    // nums = [1,1,1,2,2,3], numFrequency = {1 => 3, 2 => 2, 3 => 1}
    let numFrequency = new Map()

    // Loop through nums array to get the top 'k' most frequent elements
    for (let num of nums) {
        if (!numFrequency.has(num)) {
            numFrequency.set(num, 1)
        } else {
            numFrequency.set(num, numFrequency.get(num) + 1)
        }
    }

    let result = []
    // Compare numFrequency values to get the 'k' most frequent elements
    // Loop through numFrequency, and save 'k' most frequent elements
    while (stack.length < k) {
        let currVal = 0
        let currKey = 0

        for (let [key, value] of numFrequency.entries()) {
            if (currVal < value) {
                currVal = value
                currKey = key
            }
        }
        stack.push(currKey)
        numFrequency.delete(currKey)
    }
    return result
};

module.exports = topKFrequent