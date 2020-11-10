// LC 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/

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
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}