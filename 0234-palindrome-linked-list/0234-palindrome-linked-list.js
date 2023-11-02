/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // use slow and fast pointers
    // Reach the end of the linked list w/ the fast pointer
        // as a result, slow will reach the midpoint
    
    // reverse part of the list from fast pointer to midpoint (where slow ends up)

    // check head with new fast head
        // if at one point they don't match, return false

    // otherwise, return true
    // ******************************************************************************
    let slow = head
    let fast = head

    // Reach end of list w/ fast pointer
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let current = slow // new head of list I'm about to reverse
    let previous = null
    let temp
    
    // reverse 2nd half of list starting with slow.next
    while (current) {
        temp = current.next
        current.next = previous

        previous = current // previous keeps track of the entire reversed linked list
        current = temp
    }

    // re-set fast to be the head
    // re-set slow to previous which now holds the 2nd half of the reversed linked list
    fast = head
    slow = previous

    while (slow) {
        if (fast.val != slow.val) return false
        fast = fast.next
        slow = slow.next
    }

    return true
};