// https: //leetcode-cn.com/problems/super-pow/

/**
 * 思路：递归，模运算
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const base = 1337

const superPow = function (a, b) {
    if (b.length === 0) return 1
    const last = b.pop()

    const part1 = mypow(a, last)
    const part2 = mypow(superPow(a, b), 10)
    // 每次乘法都要求模
    return (part1 * part2) % base
}

// 计算 a 的 k 次方然后与 base 求模的结果
// function mypow(a, k) {
//     // 对因子求模
//     a %= base
//     let res = 1
//     for (let _ = 0; _ < k; _++) {
//         // 这里有乘法，是潜在的溢出点
//         res *= a
//         // 对乘法结果求模
//         res %= base
//     }
//     return res
// }

function mypow(a, k) {
    if (k === 0) return 1
    a %= base

    if (k % 2 == 1) {
        // k 是奇数
        return (a * mypow(a, k - 1)) % base
    } else {
        // k 是偶数
        const sub = mypow(a, Math.floor(k / 2))
        return (sub * sub) % base
    }
}