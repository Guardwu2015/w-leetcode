// https://leetcode-cn.com/problems/different-ways-to-add-parentheses
/**
 * 思路：分治算法
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = function (input) {
    // 1.找到所有的运算符
    // 2.左边所有的结果 运算符 右边所有的结果
    const isNumber = (str) => {
        return /^\d+$/i.test(str);
    };
    const operate = (a, b, o) => {
        if (o == '+') return a + b;
        else if (o == '-') return a - b;
        else if (o == '*') return a * b;
    };
    const map = {}; // 缓存结果
    const dfs = (input, l, r) => {
        const str = input.slice(l, r + 1).join('');
        // 从缓存结果中获取
        if (map[str]) {
            return map[str];
        }
        if (isNumber(str)) {
            // 结束条件
            return [Number(str)];
        }
        // 找到所有的操作符
        const res = [];
        for (let i = l; i < r; i++) {
            if (!isNumber(input[i])) {
                // 递归 + 合并信息
                const left = dfs(input, l, i - 1);
                const right = dfs(input, i + 1, r);
                for (const num1 of left) {
                    for (const num2 of right) {
                        res.push(operate(num1, num2, input[i]));
                    }
                }
            }
        }
        map[str] = res;
        return res;
    };
    input = input.split('');
    return dfs(input, 0, input.length - 1);
};