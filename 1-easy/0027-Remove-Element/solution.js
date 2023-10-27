// https://leetcode.com/problems/remove-element/description/

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1) 
/*
Since the loop goes through each element in the array once, and the splice operation is O(n) in the worst case, the overall time complexity of the function is O(n^2) because, in the worst case, for each element in the array, you may need to perform a removal operation that takes O(n) time. This can be highly inefficient for large input arrays.
*/
var removeElement1 = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

// Two pointer approach
// Time Complexity: O(n)
// Space Complexity: O(1)
// Better time complexity than the above, but runtime is worse 🤨
var removeElement2 = function (nums, val) {
    i = 0
    for (let num of nums) {
        if (num != val) {
            nums[i] = num
            i += 1
        }
    }
    return i
}

module.exports = {
    removeElement1,
    removeElement2
}