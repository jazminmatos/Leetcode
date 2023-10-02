const solutions = require('./0217-Contains-Duplicate')

describe('tests for Set Solution', () => {
    test.each([
        {nums: [1,2,3,1], output: true},
        {nums: [1,2,3,4], output: false},
        {nums: [1,1,1,3,3,4,3,2,4,2], output: true},
    ])('detects if there is a duplicate integer', ({nums, output}) => {
        expect(solutions.containsDuplicateSetSolution(nums)).toBe(output)
    })
})

describe('tests for Loop Solution', () => {
    test.each([
        {nums: [1,2,3,1], output: true},
        {nums: [1,2,3,4], output: false},
        {nums: [1,1,1,3,3,4,3,2,4,2], output: true},
    ])('detects if there is a duplicate integer', ({nums, output}) => {
        expect(solutions.containsDuplicateLoopSolution(nums)).toBe(output)
    })
})
    