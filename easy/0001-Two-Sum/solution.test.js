const twoSum = require('./solution')

test('returns indices of the two numbers in nums array that add up to the target', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const answer = [0, 1]

    expect(twoSum(nums, target)).toStrictEqual(answer)
})