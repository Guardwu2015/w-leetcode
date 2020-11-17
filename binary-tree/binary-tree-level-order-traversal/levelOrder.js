// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const res = []
    if (root === null) {
        return res
    }

    const q = []
    q.push(root)
    while (q.length !== 0) {
        const currentLevelSize = q.length
        res.push([])
        for (let i = 0; i < currentLevelSize; i++) {
            const node = q.shift()
            res[res.length - 1].push(node.val)
            if (node.left) {
                q.push(node.left)
            }
            if (node.right) {
                q.push(node.right)
            }
        }
    }
    return res
}