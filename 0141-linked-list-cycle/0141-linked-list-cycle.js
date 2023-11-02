/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Tortoise and Hare Algorithm
var hasCycle = function(head) {
    // slow and fast start at the same position
    let slow = head
    let fast = head

    // Need to make sure fast.next DOES NOT === null b/c fast will reach the end of the list first
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        // if slow and fast meet, it is in fact a cycle
        if (slow === fast) {
            return true
        } 
    }
    return false
}

// Third Attempt: SUCCESSSSSSS!!!!
// var hasCycle = function(head) {
//   let values = new Set ()

//     while (head) {
//         if (!values.has(head)) {
//             values.add(head)
//         } else {
//             return true
//         }

//         head = head.next
//     }
//     return false
// }

// First Attempt
// ***Doesn't work b/c I'm added head.val instead of adding the entire node: head***
// var hasCycle = function(head) {
//     let values = new Set ()

//     while (head) {
//         if (!values.has(head.val)) {
//             values.add(head.val)
//         } else {
//             return true
//         }

//         head = head.next
//     }
//     return false
// };

// Second Attempt
// ***Doesn't work b/c TLE*** *eye-roll*
// var hasCycle = function(head) {
//     if (!head) return false

//     let values = new Map ()

//     while (head.next) {
//         if (values.has(head.val) && values.get(head.val) === head.next.val) {
//             return true
//         } else {
//             values.set(head.val, head.next.val)
//         }

//         head = head.next
//     }
//     return false
// };