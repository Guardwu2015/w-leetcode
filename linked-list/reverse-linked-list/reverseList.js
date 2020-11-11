// https: //leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null) {
        return null
    }

    let prev = null, cur = head
    while (cur !== null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}