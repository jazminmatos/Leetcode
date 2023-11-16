/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Retrieve midpoint of list
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // Reverse 2nd half of list
    let current = slow.next
    let previous = null
    let temp

    while (current) {
        temp = current.next
        current.next = previous

        previous = current
        current = temp
    }

    // split the list so that slow only has the first half of the original list
    slow.next = null

    // Merge first half with second half of reversed list (in-place)
    while (head && previous) {
        temp = head.next
        head.next = previous

        // head = previous allows us to "iterate" to the next node in the linked list
        head = previous
        previous = temp
    }
};