// https: //leetcode-cn.com/problems/path-sum-iii/

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
 * @param {number} sum
 * @return {number}
 */
const pathSum = function (root, sum) {
    if (root === null) {
        return 0
    }

    return findPath(root, sum) +
        pathSum(root.left, sum) +
        pathSum(root.right, sum)

}

function findPath(node, sum) {
    if (node === null) {
        return 0
    }

    let res = 0
    if (node.val === sum) {
        res += 1
    }

    res += findPath(node.left, sum - node.val)
    res += findPath(node.right, sum - node.val)
    return res
}