// https: //leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：中序遍历
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let res = 0,
    rank = 0
var kthSmallest = function (root, k) {
    traverse(root, k)
    return res
};

function traverse(root, k) {
    if (root === null) return

    traverse(root.left, k)
    rank++
    if (rank === k) {
        res = root.val
        return
    }
    traverse(root.right, k)
}