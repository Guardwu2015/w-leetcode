// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

/**
 * 思路：深度优先遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const sumNumbers = function (root) {
    sum = 0

    return dfs(root, sum)
};

function dfs(root, sum) {
    if (root === null) {
        return 0
    }
    sum = 10 * sum + root.val
    if (root.left === null && root.right === null) {
        return sum
    }

    return dfs(root.left, sum) + dfs(root.right, sum)
}