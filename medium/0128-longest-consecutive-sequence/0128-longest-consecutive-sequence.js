// https://leetcode.com/problems/longest-consecutive-sequence/submissions/1068916528/

/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    let uniqueNums = new Set(nums);
    let maxLength = 0;

    for (let num of uniqueNums) {
        if (!uniqueNums.has(num - 1)) { // Start of a new sequence
            let currentNum = num;
            let currentLength = 1;

            while (uniqueNums.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};

module.exports = longestConsecutive