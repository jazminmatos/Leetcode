/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // edge cases:
    // if any values === null
    // if any values === undefined
    // if any values are not integers

    // If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0
        // if not, skip operation
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2
            nums[i + 1] = 0
        }
    }

    // shift all 0s to the end
    let curr = 0
    let next = 1
    let temp

    while (next < nums.length) {
        if (nums[curr] === 0 && nums[next] != 0) {
            // swap curr and next
            temp = nums[next]
            nums[next++] = nums[curr]
            nums[curr++] = temp
        }

        if (nums[curr] != 0) { // don't care if nums[next] === 0
            curr++
            next++
        }

        if (nums[curr] === 0 && nums[next] === 0) {
            next++
        }
    }

    return nums
};