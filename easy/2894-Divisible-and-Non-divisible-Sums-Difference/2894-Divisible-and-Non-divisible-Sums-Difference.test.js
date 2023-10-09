const differenceOfSums = require('./2894-Divisible-and-Non-divisible-Sums-Difference')

describe('differenceOfSums', () => {
    test.each([
        {n: 10, m: 3, output: 19},
        {n: 5, m: 6, output: 15},
        {n: 5, m: 1, output: -15}
    ])('returns the difference of divisible and non-divisible sums', ({n, m, output}) => {
        expect(differenceOfSums(n, m)).toBe(output)
    })
})