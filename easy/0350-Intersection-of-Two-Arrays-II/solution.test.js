const intersect = require('./solution')

describe('Intersection of Two Arrays II', () => {
    test.each([
        { nums1: [1, 2, 2, 1], nums2: [2, 2], output: [2, 2] },
        { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], output: [9, 4] },
    ])('given $nums1 and $nums2 as arguments, returns $output', ({ nums1, nums2, output }) => {
        expect(intersect(nums1, nums2)).toStrictEqual(output)
    })
});
