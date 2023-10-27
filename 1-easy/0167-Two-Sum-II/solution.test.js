const twoSum = require("./solution")

describe('Two Sum II', () => {
    test.each([
        { numbers: [2, 7, 11, 15], target: 9, output: [1, 2] },
        { numbers: [2, 3, 4], target: 6, output: [1, 3] },
        { numbers: [-1, 0], target: -1, output: [1, 2] }
    ])('given $numbers and $target as arguments, returns $output', ({ numbers, target, output }) => {
        expect(twoSum(numbers, target)).toStrictEqual(output)
    })
});
