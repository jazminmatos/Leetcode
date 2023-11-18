/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let numsSet = new Set()

    for (let n of nums) {
        if (!numsSet.has(n)) {
            numsSet.add(n)
        } else {
            return n
        }
    }
};