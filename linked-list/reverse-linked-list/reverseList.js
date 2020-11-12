// https: //leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 解法一
 * 思路：迭代
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

/**
 * 解法二
 * 思路：递归
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null || head.next === null) {
        return head
    }

    const last = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return last
}