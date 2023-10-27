const topKFrequent = require("./solution")

describe('topKFrequent', () => {
    test.each([
        { nums: [1, 1, 1, 2, 2, 3], k: 2, output: [1, 2] },
        { nums: [1], k: 1, output: [1] }
    ])('returns the $k most frequent elements', ({ nums, k, output }) => {
        expect(topKFrequent(nums, k)).toStrictEqual(output)
    })
})