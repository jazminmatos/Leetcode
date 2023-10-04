const isAnagram = require('./0242-valid-anagram')

describe('isAnagram function', () => {
    it.each([
        {s: "anagram", t: "nagaram", output: true},
        {s: "rat", t: "car", output: false},
    ])('detects whether $s is an anagram of $t', ({s, t, output}) => {
        expect(isAnagram(s, t)).toBe(output)
    })
});
