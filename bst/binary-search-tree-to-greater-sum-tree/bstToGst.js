// https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：中序遍历，先右后左
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let sum = 0
const bstToGst = function (root) {
    traverse(root)
    return root
}

function traverse(root) {
    if (root == null) {
        return
    }
    traverse(root.right)
    sum += root.val
    root.val = sum
    traverse(root.left)
}