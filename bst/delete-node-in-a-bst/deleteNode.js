// https: //leetcode-cn.com/problems/delete-node-in-a-bst/
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
/**
 * 思路：有点像前序遍历
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
    if (root == null) return null
    if (root.val == key) {
        // 这两个 if 把情况 1 和 2 都正确处理了
        if (root.left === null) return root.right
        if (root.right === null) return root.left
        // 处理情况 3
        const minNode = getMin(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root
}

function getMin(node) {
    // BST 最左边的就是最小的
    while (node.left !== null) {
        node = node.left
    }
    return node
}