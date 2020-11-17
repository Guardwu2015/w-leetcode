// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    const res = []
    traversal(root, res)

    return res
}

function traversal(node, res) {
    if (node === null) {
        return
    }

    res.push(node.val)
    traversal(node.left, res)
    traversal(node.right, res)
}