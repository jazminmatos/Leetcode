const groupAnagrams = require("./0049-group-anagrams")

describe('groupAnagrams', () => {
    test.each([
        {input: ["eat","tea","tan","ate","nat","bat"], output: [["eat","tea","ate"],["tan","nat"],["bat"]]},
        {input: [""], output: [[""]]},
        {input: ["a"], output: [["a"]]}
    ])('returns grouped anagrams', ({input, output}) => {
        expect(groupAnagrams(input)).toStrictEqual(output)
    })
})