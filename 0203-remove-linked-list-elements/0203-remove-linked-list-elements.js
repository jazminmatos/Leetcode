/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head
    let previous

    while (current) {
        if (current.val === val) {
            // if head.val === val, remove it from the list and create a new head
            if (!previous) {
                head = head.next // removes the head of the linked list
                current = current.next
            } else {
                // remove node by pointing previous to the node after current
                previous.next = current.next
                current = current.next
            }
        } else {
            previous = current
            current = current.next
        }
    }
    return head
};