const threeSum = require('./solution')

describe('3Sum', () => {
    test.each([
        { nums: [-1, 0, 1, 2, -1, -4], output: [[-1, -1, 2], [-1, 0, 1]] },
        { nums: [0, 1, 1], output: [] },
        { nums: [0, 0, 0], output: [[0, 0, 0]] },
    ])('given $nums as an argument, returns $output', ({ nums, output }) => {
        expect(threeSum(nums)).toStrictEqual(output)
    })
});
