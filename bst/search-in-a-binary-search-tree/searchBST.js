// https: //leetcode-cn.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

const searchBST = function (root, val) {
    if (root == null) {
        return null
    }

    if (root.val < val) {
        return searchBST(root.right, val)
    }
    if (root.val == val) {
        return root
    }
    if (root.val > val) {
        return searchBST(root.left, val)
    }

    return null
}
