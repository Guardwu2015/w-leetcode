// https: //leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (root === null) {
        return null
    }

    const q = [root]
    while (q.length) {
        const n = q.length
        let last = null
        for (let i = 0; i < n; i++) {
            const f = q.shift()

            f.left && q.push(f.left)
            f.right && q.push(f.right)

            if (i) { // 
                last.next = f
            }

            last = f
        }
    }

    return root
};