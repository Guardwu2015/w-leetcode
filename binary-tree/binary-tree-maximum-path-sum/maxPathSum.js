// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let maxSum = Number.MIN_SAFE_INTEGER

const maxPathSum = function (root) {
    pathSum(root)
    return maxSum
}

function pathSum(root) {
    if (root == null) {
        return 0
    }

    const leftSum = Math.max(pathSum(root.left), 0);
    const rightSum = Math.max(pathSum(root.right), 0);

    const sum = root.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, sum);

    return root.val + Math.max(leftSum, rightSum);
}