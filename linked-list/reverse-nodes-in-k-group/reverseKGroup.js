// https: //leetcode-cn.com/problems/reverse-nodes-in-k-group/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head == null) return null
    // 区间 [a, b) 包含 k 个待反转元素
    let a = head,
        b = head
    for (let i = 0; i < k; i++) {
        // 不足 k 个，不需要反转，base case
        if (b === null) return head
        b = b.next
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b)
    // 递归反转后续链表并连接起来
    a.next = reverseKGroup(b, k)
    return newHead
}

function reverse(a, b) {
    let prev = null,
        cur = a,
        next = a;
    // while 终止的条件为节点b
    while (cur !== b) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // 返回反转后的头结点
    return prev
}