// https://leetcode-cn.com/problems/generate-parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    if (n === 0) {
        return [""]
    }
    const res = []
    backtrack(n, n, [], res)
    return res
};

function backtrack(left, right, track, res) {
    // 若左括号剩下的多，说明不合法
    if (right < left) {
        return
    }
    if (left < 0 || right < 0) {
        return
    }
    if (left === 0 && right === 0) {
        res.push(track.join(''))
        return
    }

    // 尝试放一个左括号
    track.push('(') // 选择
    backtrack(left - 1, right, track, res)
    track.pop() // 撤消选择

    // 尝试放一个右括号
    track.push(')') // 选择
    backtrack(left, right - 1, track, res)
    track.pop() // 撤消选择
}