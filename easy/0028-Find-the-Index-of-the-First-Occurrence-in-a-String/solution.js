// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// Time Complexity: O(n) + O(m)
// Space Complexity: O(1)
var strStr = function (haystack, needle) {
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1
};

module.exports = strStr

// Time Complexity:

// 1. The includes method in JavaScript is typically implemented as a linear search through the "haystack" string to check for the presence of the "needle" string. This means it has a time complexity of O(n), where n is the length of the "haystack" string.
// 2. If the "needle" is found using includes, the function then calls indexOf to find the index of the first occurrence of the "needle" in the "haystack." indexOf also performs a linear search, so it has a time complexity of O(m), where m is the length of the "needle" string.
// 3. Combining these two operations, the overall time complexity of the strStr function is O(n) + O(m), where n is the length of the "haystack" string, and m is the length of the "needle" string.

// In the worst case, if "needle" is not found in "haystack," the function will have to search through the entire "haystack" string, resulting in a time complexity of O(n).

// Space Complexity:

// The strStr function doesn't use any data structures that depend on the input size. It only uses a constant amount of space for the function itself. Therefore, the space complexity is O(1), which means it uses a constant amount of memory regardless of the input size.

// In summary, the time complexity of the strStr function is O(n) + O(m), and the space complexity is O(1), where n is the length of the "haystack" string, and m is the length of the "needle" string.