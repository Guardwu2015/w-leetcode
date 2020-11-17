// https://leetcode-cn.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
    const res = []

    if (root === null) {
        return res
    }

    if (root.left === null && root.right === null) {
        res.push(`${root.val}`)
        return res
    }

    const leftPaths = binaryTreePaths(root.left)
    for (let i = 0; i < leftPaths.length; i++) {
        let lp = root.val
        lp += `->${leftPaths[i]}`
        res.push(lp)
    }

    const rightPaths = binaryTreePaths(root.right)
    for (let i = 0; i < rightPaths.length; i++) {
        let rp = root.val
        rp += `->${rightPaths[i]}`
        res.push(rp)
    }

    return res
};