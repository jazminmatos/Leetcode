/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let start = 0
    let end = s.length - 1
    let temp

    let stringArray = s.split("")

    while (start < end) {
        if (!isLetter(start, stringArray[start])) {
            start++
            continue
        }

        if (!isLetter(end, stringArray[end])) {
            end--
            continue
        }

        temp = stringArray[start]
        stringArray[start++] = stringArray[end]
        stringArray[end--] = temp
    }
    return stringArray.join("")
};

function isLetter(index, s) {
    // a-z, Ascii Values: 97-122
    if (s.charCodeAt(0) > 96 && s.charCodeAt(0) < 123) {
        return true
    }
    // A-Z, Ascii Values: 65-90
    if (s.charCodeAt(0) > 64 && s.charCodeAt(0) < 91) {
        return true
    }
    return false
}