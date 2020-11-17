// https: //leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const NULL = '$'
const SEP = ','

const serialize = function (root) {
    if (root == null) {
        return `${NULL}${SEP}`;
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return `${root.val},${left}${right}`;
};

const deserialize = function (data) {
    const list = data.split(SEP);

    const buildTree = (list) => {
        const rootVal = list.shift();
        if (rootVal == NULL) {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    };

    return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */