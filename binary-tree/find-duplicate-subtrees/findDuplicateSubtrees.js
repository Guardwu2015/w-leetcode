// https://leetcode-cn.com/problems/find-duplicate-subtrees/submissions/
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
 * @return {TreeNode[]}
 */

const memo = new Map()
const res = []

const findDuplicateSubtrees = function(root) {
    traverse(root, memo, res)
    return res
};

function traverse (root, memo, res) {
    if (root == null) {
        return "#";
    }

    const left = traverse(root.left, memo, res);
    const right = traverse(root.right, memo, res);

    const subTree = left + "," + right+ "," + root.val;
    const freq = memo.get(subTree) ? memo.get(subTree) : 0;

    if (freq === 1) {
        res.push(root);
    }
        
    memo.set(subTree, freq + 1);
    return subTree;
}