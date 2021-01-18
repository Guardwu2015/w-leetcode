// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：后续遍历
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    // base case
    if (root === null) return null
    if (root === p || root === q) return root

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // 情况 1
    if (left !== null && right !== null) {
        return root
    }
    // 情况 2
    if (left === null && right === null) {
        return null
    }
    // 情况 3
    return left === null ? right : left
}