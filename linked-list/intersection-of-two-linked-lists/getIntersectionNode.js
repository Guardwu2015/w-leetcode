// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
/**
 * 思路一：双指针
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
    hA = hA === null ? headB : hA.next
    hB = hB === null ? headA : hB.next
  }

  return hA
}

/**
 * 思路二，哈希表
 */

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null

    const hashmap = new Map()

    let pA = headA
    while (pA) {
        hashmap.set(pA, 1)
        pA = pA.next
    }

    let pB = headB
    while (pB) {
        if (hashmap.has(pB)) return pB
        pB = pB.next
    }
}