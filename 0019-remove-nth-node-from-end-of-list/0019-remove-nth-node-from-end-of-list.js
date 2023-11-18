/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let current = head
    let count = 0

    // Determine number of nodes in linked list
    while (current) {
        count++
        current = current.next
    }

    let difference = count - n

    // Edge case: when you ne
    if (difference === 0) {
        return head.next
    }

    count = 0
    current = head

    // Iterate through linked list until reaching count === difference
    // Remove node at difference
    while (current && current.next) {
        count++
        if (count === difference) {
            current.next = current.next.next
            break
        }
        current = current.next
    }
    return head
}