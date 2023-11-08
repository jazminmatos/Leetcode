/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true

    let tPointer = 0
    let sPointer = 0

    while (tPointer < t.length) {
        if (sPointer === s.length - 1 && t[tPointer] === s[sPointer]) {
            return true
        }

        if (t[tPointer] === s[sPointer]) {
            sPointer++
        }

        tPointer++
    }
    return false
};