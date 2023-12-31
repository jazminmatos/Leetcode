// https://leetcode.com/problems/merge-sorted-array/

/*
You are given two integer arrays nums1 and nums2, sorted in 
non-decreasing order, and two integers m and n, representing the 
number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing 
order.

The final sorted array should not be returned by the function, but 
instead be stored inside the array nums1. To accommodate this, nums1 
has a length of m + n, where the first m elements denote the elements 
that should be merged, and the last n elements are set to 0 and 
should be ignored. nums2 has a length of n.
*/

var merge = function (nums1, m, nums2, n) {
    let i = m - 1; // 2
    let j = n - 1; // 2
    let k = m + n - 1; // 5

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
            // k and j decrement AFTER nums1[k] and nums2[j] are retrieved
        }
    }

    return nums1
};

var merge2 = function (nums1, m, nums2, n) {
    let sum = m + n
    for (let i = m; i < sum; i++) {
        nums1[i] = nums2[n - 1]
        n--
    }
    return nums1.sort((a, b) => a - b)
}

module.exports = merge