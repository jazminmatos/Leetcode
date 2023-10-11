const isAnagram = require('./solution')

describe('isAnagram function', () => {
    it.each([
        { s: "anagram", t: "nagaram", output: true },
        { s: "rat", t: "car", output: false },
    ])("given $s and $t as arguments, returns $output", ({ s, t, output }) => {
        expect(isAnagram(s, t)).toBe(output)
    })
});
