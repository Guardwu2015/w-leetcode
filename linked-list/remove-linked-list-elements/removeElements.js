// https://leetcode-cn.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = function (head, val) {
    if (head === null) {
        return null
    }
    // dummyHead虚拟头结点
    const dummyHead = new ListNode(-1, head)
    let prev = dummyHead, cur = head

    while (cur !== null) {
        if (cur.val === val) {
            prev.next = cur.next
        } else {
            prev = cur
        }
        cur = cur.next
    }

    return dummyHead.next
};