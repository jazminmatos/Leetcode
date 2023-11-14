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
var deleteMiddle = function(head) {
    let previous
    let slow = head
    let fast = head
    let count = 1

    while (fast && fast.next) {
        previous = slow
        slow = slow.next
        fast = fast.next.next
        count++
    }

    if (count < 2) {
        head = head.next
        return head
    }

    previous.next = slow.next
    return head
};