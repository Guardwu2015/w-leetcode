
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  if (head === null) {
    return null
  }

  let dummyHead = new ListNode(-1, head) // 虚拟头结点
  let fast = head, slow = dummyHead
  while (n--) {
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  // 删除指定节点
  slow.next = slow.next.next

  return dummyHead
}