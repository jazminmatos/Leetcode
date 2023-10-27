/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // edge cases:
        // lowercase & uppercase
        // if s === null
        // if s === ""
        // if s === non-alphanumerical characters like ';/,-='

    // create a set w/ vowels
    // Two pointer method: (start, end) iterate through string
        // if start is NOT a vowel increment start until it is a vowel
        // if end is NOT a vowel decrement end until it is a vowel
        // once start and end are BOTH vowels, swap them
    
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let start = 0
    let end = s.length - 1
    let wordArray = s.split("")

    while (start < end) {
        if (vowels.has(wordArray[start]) && vowels.has(wordArray[end])) {
            let temp = wordArray[start]
            wordArray[start++] = wordArray[end]
            wordArray[end--] = temp
        }

        if (!vowels.has(wordArray[start])) start++

        if (!vowels.has(wordArray[end])) end--
    }
    return wordArray.join("")
};