// LC 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：双指针，链表翻转
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  // 双指针求链表中点
  let slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast !== null) { // 链表长度为奇数
    slow = slow.next
  }

  // 从slow开始反转后面的链表
  let left = head
  let right = reverse(slow)

  while (right !== null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }

  return true
};

// 翻转链表
function reverse(head) {
  let prev = null, cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}