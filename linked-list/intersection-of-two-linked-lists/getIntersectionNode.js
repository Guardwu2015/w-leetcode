// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }

  let hA = headA, hB = headB
  while(hA !== hB) {
    hA === hA === null ? headB : hA.next
    hB === hB === null ? headA : hB.next
  }

  return hA
}