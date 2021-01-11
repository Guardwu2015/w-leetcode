// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 思路：
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
        if(root === null)
            return null

        if(p.val < root.val && q.val < root.val)
            return lowestCommonAncestor(root.left, p, q)
        if(p.val > root.val && q.val > root.val)
            return lowestCommonAncestor(root.right, p, q)

        return root
};