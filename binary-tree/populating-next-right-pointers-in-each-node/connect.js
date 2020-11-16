// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
    if (root === null) {
        return null
    }
    connectTwoNode(root.left, root.right)

    return root
};

function connectTwoNode (node1, node2) {
    if (node1 === null || node2 === null) {
        return
    }
    node1.next = node2

    connectTwoNode(node1.left, node1.right)
    connectTwoNode(node2.left, node2.right)
    
    connectTwoNode(node1.right, node2.left)
}