// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    return build(preorder, 0, preorder.length -1, inorder, 0, inorder.length - 1)
};

function build (preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (inStart > inEnd) {
        return null
    }

    const rootVal = preorder[preStart]
    let index = -1
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === rootVal) {
            index = i
            break
        }
    }
    const leftSize = index - inStart

    const root = new TreeNode(rootVal)
    root.left = build(preorder, preStart + 1, preStart + leftSize, 
                      inorder, inStart, index -1)
    root.right = build(preorder, preStart + leftSize + 1, preEnd,
                      inorder, index + 1, inEnd)

    return root
}