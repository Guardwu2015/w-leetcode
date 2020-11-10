// https: //leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路：快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false
    }

    let slow = head, fast = head
    while (slow !== fast) {
        if (slow === null || fast === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
};