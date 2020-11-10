// https: //leetcode-cn.com/problems/rotate-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 解法一
 * 思路：先遍历求出链表长度
 * @param {*} head 
 * @param {*} k 
 */
const rotateRight1 = function (head, k) {
    if (head === null) {
        return null
    }
    if (head.next === null) {
        return head
    }

    let cur = head
    len = 0
    while (cur !== null) {
        cur = cur.next
        len++
    }
    let head2 = head
    for (let i = 0; i < len - k - 1; i++) {
        head2 = head2.next
    }
    const newHead = head2.next
    head2.next = null

    let tail = newHead
    for (let i = 0; i < k - 1; i++) {
        tail = tail.next
    }
    tail.next = head

    return newHead
}

/**
 * 解法二
 * 思路： 先形成闭环， 找到合适的断点
 * @param {*} head 
 * @param {*} k 
 */
const rotateRight2 = function (head, k) {
    // base cases
    if (head == null) return null
    if (head.next == null) return head

    // close the linked list into the ring
    let oldTail = head
    let n
    for (n = 1; oldTail.next != null; n++) {
        oldTail = oldTail.next
    }
    oldTail.next = head

    // find new tail : (n - k % n - 1)th node
    // and new head : (n - k % n)th node
    let newTail = head
    for (let i = 0; i < n - k % n - 1; i++)
        newTail = newTail.next
    const newHead = newTail.next

    // break the ring
    newTail.next = null

    return newHead
}