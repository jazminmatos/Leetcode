const maxArea = require('./solution')

describe('Container With Most Water', () => {
    test.each([
        { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], output: 49 },
        { height: [1, 1], output: 1 },
    ])('given $height as an argument, returns $output', ({ height, output }) => {
        expect(maxArea(height)).toBe(output)
    })
});
