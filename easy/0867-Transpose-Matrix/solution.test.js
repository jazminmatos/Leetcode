const transpose = require("./solution")

describe('transpose', () => {
    test('flips the original matrix over its main diagonal', () => {
        matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        output = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

        expect(transpose(matrix)).toStrictEqual(output)
    });

});
