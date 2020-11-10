// https: //leetcode-cn.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly - linked list.* function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * 解法一，画图
 * @param {ListNode} head
 * @return {ListNode}
 */

const detectCycle = function (head) {
    if (head === null) {
        return null
    }

    let show = head, fast = head
    while (fast !== null) {
        slow = slow.next
        if (fast.next !== null) {
            fast = fast.next.next
        } else {
            return null
        }

        if (fast === slow) {
            let ptr = head
            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
    }

    return null
}
/**
 * 解法二，哈希表
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
    const visited = new Set()
    while (head !== null) {
        if (visited.has(head)) {
            return head
        }
        visited.add(head)
        head = head.next
    }
    return null
}