/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time Complexity: O(n)
// Space Complextiy: O(1)
var reverseList = function(head) {
    let previous = null
    let current = head
    let temp

    while (current) {
        // console.log("previous:", previous)
        // console.log("head:", head)
        // console.log("head.val:", head.val)
        temp = current.next
        current.next = previous

        previous = current
        current = temp
        // console.log("temp:", temp)
        // console.log("current:", current)
        // console.log("previous:", previous)
        // console.log("*********************************************************")
    }

    return previous
};

// Example #1: Head = [1, 2, 3, 4, 5]
// *********************************************************
// previous: null
// head: [1,2,3,4,5]
// head.val: 1
// temp: [2,3,4,5]
// current: [2,3,4,5]
// previous: [1]
// *********************************************************
// previous: [1]
// head: [1]
// head.val: 1
// temp: [3,4,5]
// current: [3,4,5]
// previous: [2,1]
// *********************************************************
// previous: [2,1]
// head: [1]
// head.val: 1
// temp: [4,5]
// current: [4,5]
// previous: [3,2,1]
// *********************************************************
// previous: [3,2,1]
// head: [1]
// head.val: 1
// temp: [5]
// current: [5]
// previous: [4,3,2,1]
// *********************************************************
// previous: [4,3,2,1]
// head: [1]
// head.val: 1
// temp: null
// current: null
// previous: [5,4,3,2,1]
// *********************************************************