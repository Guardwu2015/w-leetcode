// https://leetcode-cn.com/problems/partition-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路：双指针
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
    let small = new ListNode(0)
    const smallHhead = small
    let large = new ListNode(0)
    const largeHead = large

    while(head !== null) {
        if (head.val < x) {
            small.next = head
            small = small.next
        } else {
            large.next = head
            large = large.next
        }
        head = head.next
    }
    large.next = null
    small.next = largeHead.next

    return smallHhead.next
}