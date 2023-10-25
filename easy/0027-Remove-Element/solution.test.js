const { removeElement1, removeElement2 } = require('./solution')

describe('Remove Element', () => {
    test.each([
        { nums: [3, 2, 2, 3], val: 3, output: 2 },
        { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, output: 5 },
    ])('removeElement1: given $nums and $val as arguments, returns $output', ({ nums, val, output }) => {
        expect(removeElement1(nums, val)).toBe(output)
    })

    test.each([
        { nums: [3, 2, 2, 3], val: 3, output: 2 },
        { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, output: 5 },
    ])('removeElement2: given $nums and $val as arguments, returns $output', ({ nums, val, output }) => {
        expect(removeElement2(nums, val)).toBe(output)
    })
});
