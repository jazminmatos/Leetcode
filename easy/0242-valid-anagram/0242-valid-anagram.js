// https://leetcode.com/problems/valid-anagram/description/

/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
if (s.length != t.length) {
    return false
}

// Create a map
let map = new Map()

// Iterate through s
// set the letters as keys
// set the number of times that the letters show up as their values
for (const letter of s) {
    // check if letter exists in map
    // if it does not exist, add to map
    // if it exists, add to its value
    if (!map.has(letter)) {
        map.set(letter, 1)
    } else {
        map.set(letter, map.get(letter) + 1)
    }
}
// Iterate through t
// Compare t's letters to map's letters
for (const letter of t) {
    // If letter exists in map, subtract from map's letter's value
        // if that value is at 1, delete from map
    if (map.has(letter) && map.get(letter) === 1) {
            map.delete(letter)
    } else {
        map.set(letter, map.get(letter) - 1)
    }
}
// if size of map is 0, return true
// if size of map is more than 0, return false
return map.size === 0
};