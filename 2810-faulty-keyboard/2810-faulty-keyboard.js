/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let wordArray = s.split("")
    let temp

    for (let index = 0; index < wordArray.length; index++) {
        // i > 1 b/c no need to swap if there's only one letter before wordArray[i]
        if (wordArray[index] === "i") {
            // remove "i" from array
            wordArray[index] = ""
            
            if (index > 1) {
                let start = 0
                let end = index - 1

                while (start < end) {
                    temp = wordArray[end]
                    wordArray[end--] = wordArray[start]
                    wordArray[start++] = temp
                }
            }
        }
    }
    return wordArray.join("")
};