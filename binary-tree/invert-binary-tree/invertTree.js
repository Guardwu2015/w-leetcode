// https: //leetcode-cn.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// const invertTree = function(root) {
//     if (root === null) {
//         return null
//     }
//     // const temp = root.right
//     // root.right = root.left
//     // root.left = temp
//     [root.left, root.right] = [root.right, root.left]

//     invertTree(root.left)
//     invertTree(root.right)

//     return root
// };

const invertTree = function (root) {
    if (root === null) {
        return null
    }

    const left = invertTree(root.left)
    const right = invertTree(root.right)

    root.left = right
    root.right = left

    return root
}