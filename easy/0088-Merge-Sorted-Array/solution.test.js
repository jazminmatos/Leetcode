const merge = require("./solution")

describe('merge', () => {
    test.each([
        { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, output: [1, 2, 2, 3, 5, 6] },
        { nums1: [1], m: 1, nums2: [], n: 0, output: [1] }
    ])('merges in order', ({ nums1, m, nums2, n, output }) => {
        expect(merge(nums1, m, nums2, n)).toStrictEqual(output)
    })
});

