https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
    return build(inorder, 0, inorder.length - 1,
                postorder, 0, postorder.length - 1)
};

function build (inorder, inStart, inEnd,
                postorder, postStart, postEnd) {
        if (inStart > inEnd) {
            return null
        }

        const rootVal = postorder[postEnd]
        let index = 0
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] === rootVal) {
                index = i
                break
            }
        }

        const leftSize = index - inStart

        const root = new TreeNode(rootVal)
        root.left = build(inorder, inStart, index -1,
                          postorder, postStart, postStart + leftSize - 1)
        root.right = build(inorder, index + 1, inEnd,
                          postorder, postStart + leftSize, postEnd - 1)

        return root
}