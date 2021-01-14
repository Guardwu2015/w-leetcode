// https://leetcode-cn.com/problems/is-subsequence

/**
 * 思路：双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let i = 0, j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++
        j++
    }
    return i === s.length
}

/**
 * 解法二：二分查找
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    const m = s.length, n = t.length
    // 对t进行预处理, 统计t中每个字符出现的次数
    const index = {}
    for (let i = 0; i < n; i++) {
        const c = t[i]
        if (!index[c]) 
            index[c] = []
        index[c].push(i)
    }

    // 串 t 上的指针
    let j = 0
    // 借助 index 查找 s[i]
    for (let i = 0; i < m; i++) {
        const c = s[i]
        // 整个 t 压根儿没有字符 c
        if (!index[c]) return false
        const pos = left_bound(index[c], j)
        // 二分搜索区间中没有找到字符 c
        if (pos === index[c].length) return false
        // 向前移动指针 j
        j = index[c][pos] + 1
    }
    return true
}

function left_bound(arr, tar) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2)
        if (tar > arr[mid]) {
            lo = mid + 1
        } else {
            hi = mid
        } 
    }
    return lo
}