/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode()
    let tail = mergedList

    // Both list1 and list2 cannot === null
    while (list1 && list2) {
        // Compare values
        if (list1.val < list2.val) {
            // update tail with new node 
            // update list1 to keep the while loop going
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }

        // update tail to keep the while loop going
        tail = tail.next
    }

    // In case list1 and list2 have different lengths
    // If list1 is shorter, the rest of the nodes in list2 need to be appended to tail
    // if (list1) {
    //     tail.next = list1
    // } else if (list2) {
    //     tail.next = list2
    // }
    tail.next = list1 || list2

    // because new ListNodes are initialized with a value of 0
    return mergedList.next
};