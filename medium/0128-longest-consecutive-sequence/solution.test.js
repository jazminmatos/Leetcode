const solution = require("./solution")

describe('longestConsecutive', () => {
    test.each([
        { nums: [100, 4, 200, 1, 3, 2], output: 4 },
        { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], output: 9 }
    ])('returns the length of the longest consecutive elements sequence', ({ nums, output }) => {
        expect(solution(nums)).toBe(output)
    })
});
