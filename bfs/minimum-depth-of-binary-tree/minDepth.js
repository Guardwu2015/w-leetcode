// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：bfs
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
    if (root === null) {
        return 0
    }

    const q = [root]
    let depth = 1
    while (q.length) {
        const len = q.length
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            if (node.left == null && node.right == null) {
                return depth
            }

            node.left && q.push(node.left)
            node.right && q.push(node.right)

        }
        depth++
    }
    return depth
}