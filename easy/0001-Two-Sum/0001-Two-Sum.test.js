const twoSum = require('./0001-Two-Sum')

test('returns indices of the two numbers in nums array that add up to the target', () => {
    const nums = [2,7,11,15]
    const target = 9
    let answer = [0,1]

    expect(twoSum(nums, target)).toStrictEqual(answer)
})