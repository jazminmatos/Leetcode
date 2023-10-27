// https://leetcode.com/problems/intersection-of-two-arrays/

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

var intersection = function (nums1, nums2) {

    let shorterNumsSet
    let resultSet = new Set()

    if (nums1.length < nums2.length) {
        shorterNumsSet = new Set(nums1)
        return compareSetAndArray(shorterNumsSet, nums2, resultSet)
    } else {
        shorterNumsSet = new Set(nums2)
        return compareSetAndArray(shorterNumsSet, nums1, resultSet)
    }
};


var compareSetAndArray = function (setObj, longerArray, resultSet) {
    for (let i = 0; i < longerArray.length; i++) {
        if (setObj.has(longerArray[i])) {
            resultSet.add(longerArray[i])
        }
    }
    return [...resultSet]
}

module.exports = intersection