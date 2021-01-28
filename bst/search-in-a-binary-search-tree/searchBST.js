// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：中序遍历
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
    if (root === null) {
        return null
    }

    if (root.val < val) {
        return searchBST(root.right, val)
    }
    if (root.val === val) {
        return root
    }
    if (root.val > val) {
        return searchBST(root.left, val)
    }

    return null
}
