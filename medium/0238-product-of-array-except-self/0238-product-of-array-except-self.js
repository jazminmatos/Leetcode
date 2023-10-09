// https://leetcode.com/problems/product-of-array-except-self/description/

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

function productExceptSelf(nums) {
    let result = [];
    let left = 1;
    let right = 1;

    // Retrieve the product of all the elements to the left of nums[i]
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }

    // Calculate the product of all the elements to the left and all the elements to the right of nums[i]
    for (let i = nums.length - 1; i >= 0; i--) {
        // compute right product for nums[i] and multiply it with the left product
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};

module.exports = productExceptSelf;
/* 
Aproach (Aproach of commented code)
The first solution computes the product of all the elements to the left and right of each element in the input array 
using two separate arrays - leftArr and rightArr. It then multiplies the left and right products for each element to get 
the final result.

Let's take an example to understand this approach. Consider an input array:

nums = [1,2,3,4]

The approach works as follows:

1. Initialize two arrays, leftArr and rightArr, both of size nums.length.
2. Traverse the nums array from left to right and compute the product of all elements to the left of the current element. 
Store this value in the corresponding index of leftArr.

leftArr[0] = 1
leftArr[1] = 1 * nums[0] = 1 * 1 = 1
leftArr[2] = 1 * nums[0] * nums[1] = 1 * 1 * 2 = 2
leftArr[3] = 1 * nums[0] * nums[1] * nums[2] = 1 * 1 * 2 * 3 = 6

3. Traverse the nums array from right to left and compute the product of all elements to the right of the current element. 
Store this value in the corresponding index of rightArr.

rightArr[3] = 1
rightArr[2] = 1 * nums[3] = 1 * 4 = 4
rightArr[1] = 1 * nums[3] * nums[2] = 1 * 4 * 3 = 12
rightArr[0] = 1 * nums[3] * nums[2] * nums[1] = 1 * 4 * 3 * 2 = 24

4. Traverse the nums array one more time and compute the final product by multiplying the corresponding values in leftArr and rightArr.

result[0] = leftArr[2] * rightArr[1] = 2 * 12 = 24
result[1] = leftArr[1] * rightArr[2] = 1 * 24 = 24
result[2] = leftArr[0] * rightArr[3] = 1 * 1 = 1
result[3] = leftArr[3] * rightArr[0] = 6 * 1 = 6

5. Return the result array.

The time complexity of this approach is O(n), and the space complexity is also O(n) due to the use of two extra arrays 
leftArr and rightArr. But we will later modify this code

Explanation of actual code step by step:
1. Initialize an empty array result to store the final products, and two variables left and right to store the left and 
right products for each element, respectively.

2. Loop through the nums array from left to right. For each element nums[i], compute its left product by setting result[i] 
to the current value of left, and then updating left to the product of left and nums[i].

3. Loop through the nums array again, but this time from right to left. For each element nums[i], compute its right product 
by multiplying right with nums[i], and then updating result[i] to the product of the current value of result[i] and right.

4. After the loops have completed, the result array should contain the final products of all elements in the nums array.

The key idea behind this approach is that each element's product can be computed as the product of its left and right 
products. By computing these left and right products separately for each element, we can avoid having to compute the product 
of all elements except for the current one, which would have a time complexity of O(n^2). Instead, we can achieve a time 
complexity of O(n) by computing the left and right products in separate passes through the array. Additionally, we can 
optimize the space complexity by storing only the left and right products for each element in two variables left and right, 
instead of creating two separate arrays like in the first solution.
*/
