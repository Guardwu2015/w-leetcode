// https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    const p1 = l1, p2 = l2
    const dummyHead = new ListNode(-1)

    let prev = dummyHead
    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            prev.next = p1
            p1 = p1.next
            
        } else {
            prev.next = p2
            p2 = p2.next
        }
        prev = prev.next
    }

    prev.next = p1 ? p1 : p2

    return dummyHead.next
};