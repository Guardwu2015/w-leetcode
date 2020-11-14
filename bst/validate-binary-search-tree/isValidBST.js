// https: //leetcode-cn.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

    const isValidBST = function (root) {
        return isValidBST(root, null, null)
    }

    /* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
    function isValidBST(root, min, max) {
        // base case
        if (root == null) return true
        // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
        if (min != null && root.val <= min.val) return false
        if (max != null && root.val >= max.val) return false
        // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
        return isValidBST(root.left, min, root) &&
            isValidBST(root.right, root, max)
    }
