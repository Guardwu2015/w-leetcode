// https: //leetcode-cn.com/problems/insert-into-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
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