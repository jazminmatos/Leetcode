const isPalindrome = require("./solution")

describe('Valid Palindrome', () => {
    test.each([
        { string: "A man, a plan, a canal: Panama", output: true },
        { string: "race a car", output: false }
    ])('given $string as an argument, returns $output', ({ string, output }) => {
        expect(isPalindrome(string)).toBe(output)
    })
});



