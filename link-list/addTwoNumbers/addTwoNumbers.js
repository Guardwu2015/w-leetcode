// https://leetcode-cn.com/leetbook/read/linked-list/fv6w7/
// 虚拟头结点，相加进位
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
const addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0)
    let p = l1
    let q = l2
    let carry = 0
    let curr = dummyHead
    while (p !== null || q !== null) {
        let x = p !== null ? p.val : 0
        let y = q !== null ? q.val : 0
        const digit = carry + x + y
        carry = Math.floor(digit / 10)
        curr.next = new ListNode(digit % 10)
        curr = curr.next
        p && (p = p.next)
        q && (q = q.next)
    }
    if (carry > 0) {
        curr.next = new ListNode(carry)
    }

    let head = dummyHead.next
    while (head !== null) {
        head = head.next
    }

    return dummyHead.next
}