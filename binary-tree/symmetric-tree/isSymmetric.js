// https://leetcode-cn.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
    return check(root, root)
}

function check(p, q) {
    if (p === null && q === null) {
        return true
    }

    if (p === null || q === null) {
        return false
    }

    if (p.val === q.val) {
        return check(p.left, q.right) && check(p.right, q.left)
    }

    return false
}