// https://leetcode-cn.com/problems/different-ways-to-add-parentheses
/**
 * 思路：分治算法
 * @param {string} input
 * @return {number[]}
 */

const memo = new Map()
const diffWaysToCompute = function (input) {
    if (memo.has(input)) {
        return memo.get(input)
    }
    const res = []
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        // 扫描算式 input 中的运算符
        if (!isNumber(c)) {
            /****** 分 ******/
            // 以运算符为中心，分割成两个字符串，分别递归计算
            const left = diffWaysToCompute(input.substring(0, i))
            const right = diffWaysToCompute(input.substring(i + 1))
            /****** 治 ******/
            // 通过子问题的结果，合成原问题的结果
            for (let a of left) {
                for (let b of right) {
                    res.push(operate(Number(a), Number(b), c))
                }
            }
        }
    }
    // base case
    // 如果 res 为空，说明算式是一个数字，没有运算符
    // if (!res.length) {
    //     res.push(input)
    // }
    if (isNumber(input)) {
        res.push(input)
    }
    memo.set(input, res)
    return res
}

function isNumber(str) {
    return /^\d+$/i.test(str)
}

function operate(a, b, o) {
    if (o === '+') return a + b
    else if (o === '-') return a - b
    else if (o === '*') return a * b
}