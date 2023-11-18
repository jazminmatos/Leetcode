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
var deleteDuplicates = function(head) {
    let current = head

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        // it needs to be an if/ELSE statement, because after you get rid of the duplicate and point current to current.next.next
        // you still need to compare current with the new node you just set current.next to
        } else {
            current = current.next
        }
    }
    return head
};