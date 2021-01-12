// https: //leetcode-cn.com/problems/insert-into-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：前序遍历
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function(root, val) {
    if (root == null) {
        return new TreeNode(val)
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }

    return root
}
