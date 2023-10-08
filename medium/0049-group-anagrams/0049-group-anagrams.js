var groupAnagrams = function(strs) {
    // create a map where the key is the alphabetized string and the value is all of its anagrams
    let map = new Map ()
    let solution = []
    
    for (let word of strs) {
        let sortedWord = word.split('').sort().join('') 
        if (!map.has(sortedWord)) {
            // add it to map as a key
            // add original unalphabetized word as value
            map.set(sortedWord, [word])
        } else {
            let updatedValue = map.get(sortedWord)
            updatedValue.push(word)
            map.set(sortedWord, updatedValue)
        }
    }

    for (let [_, value] of map.entries()) {
        solution.push(value)
    } 

    return solution
};