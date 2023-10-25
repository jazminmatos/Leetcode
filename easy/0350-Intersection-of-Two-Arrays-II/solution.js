// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/* 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

var intersect = function (nums1, nums2) {
    const shorterNumsMap = new Map()
    let result = []
    const nums1Length = nums1.length
    const nums2Length = nums2.length

    if (nums1Length < nums2Length) {
        createMap(nums1, shorterNumsMap)
        return compareMapAndArray(shorterNumsMap, nums2, result)
    } else {
        createMap(nums2, shorterNumsMap)
        return compareMapAndArray(shorterNumsMap, nums1, result)
    }
};

// Create map from shorter array
var createMap = function (numsArray, mapObj) {
    for (let i = 0; i < numsArray.length; i++) {
        // {value: # of times it's in array}
        mapObj.set(numsArray[i], (mapObj.get(numsArray[i]) || 0) + 1)
    }
}

var compareMapAndArray = function (mapObj, longerArray, result) {
    for (let i = 0; i < longerArray.length; i++) {
        if (mapObj.has(longerArray[i])) {

            if (mapObj.get(longerArray[i]) != 1) {
                mapObj.set(longerArray[i], (mapObj.get(longerArray[i]) - 1))
            } else {
                mapObj.delete(longerArray[i])
            }

            result.push(longerArray[i])
        }
    }
    return result
}

module.exports = intersect