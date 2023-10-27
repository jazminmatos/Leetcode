const isToeplitzMatrix = require("./solution")

describe('isToeplitzMatrix', () => {
    test('returns true if every diagonal from top-left to bottom-right has the same elements', () => {
        const output = true
        const matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]

        expect(isToeplitzMatrix(matrix)).toBe(output)
    });

    test('returns false if every diagonal from top-left to bottom-right has the same elements', () => {
        const output = false
        const matrix = [[1, 2], [2, 2]]

        expect(isToeplitzMatrix(matrix)).toBe(output)
    });
});
