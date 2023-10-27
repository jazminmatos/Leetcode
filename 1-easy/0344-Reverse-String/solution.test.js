const { solution1, solution2, solution3 } = require("./solution")

describe('solution1', () => {
    test.each([
        { input: ["h", "e", "l", "l", "o"], output: ["o", "l", "l", "e", "h"] },
        { input: ["H", "a", "n", "n", "a", "h"], output: ["h", "a", "n", "n", "a", "H"] }
    ])('reverses $input to $output', ({ input, output }) => {
        expect(solution1(input)).toStrictEqual(output)
    })
});

describe('solution2', () => {
    test.each([
        { input: ["h", "e", "l", "l", "o"], output: ["o", "l", "l", "e", "h"] },
        { input: ["H", "a", "n", "n", "a", "h"], output: ["h", "a", "n", "n", "a", "H"] }
    ])('reverses $input to $output', ({ input, output }) => {
        expect(solution2(input)).toStrictEqual(output)
    })
});

describe('solution3', () => {
    test.each([
        { input: ["h", "e", "l", "l", "o"], output: ["o", "l", "l", "e", "h"] },
        { input: ["H", "a", "n", "n", "a", "h"], output: ["h", "a", "n", "n", "a", "H"] }
    ])('reverses $input to $output', ({ input, output }) => {
        expect(solution3(input)).toStrictEqual(output)
    })
});

