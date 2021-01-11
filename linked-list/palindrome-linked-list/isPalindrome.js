// https://leetcode-cn.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：快慢指针，翻转链表
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = function (head) {
    if (head === null) {
        return true
    }

    const firstHalfEnd = endOfFirstHalf(head)
    const secondHalfStart = reverseList(firstHalfEnd.next)

    let p1 = head
    let p2 = secondHalfStart
    let result = true

    while (result && p2 !== null) {
        if (p1.val !== p2.val) {
            result = false
        }
        p1 = p1.next
        p2 = p2.next
    }

    firstHalfEnd.next = reverseList(secondHalfStart);
    return result
};

const endOfFirstHalf = (head) => {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

const reverseList = (head) => {
    let prev = null
    let cur = head
    while (cur !== null) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}

