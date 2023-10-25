const strStr = require('./solution')

describe('Find the Index of the First Occurrence in a String', () => {
    test.each([
        { haystack: "sadbutsad", needle: "sad", output: 0 },
        { haystack: "leetcode", needle: "leeto", output: -1 },
    ])('given the arguments $haystack and $needle, returns $output', ({ haystack, needle, output }) => {
        expect(strStr(haystack, needle)).toBe(output)
    })
});
