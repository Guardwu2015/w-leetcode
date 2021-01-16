// https://leetcode-cn.com/problems/minimum-window-substring
/**
 * 思路：滑动窗口
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
    const need = {}, window = {}
    const n = t.length
    for (let i = 0; i < n; i++) {
        const c = t[i]
        if (!need[c]) 
            need[c] = 0
        need[c]++
    }

    let left = 0, right = 0
    let valid = 0
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Number.MAX_SAFE_INTEGER
    while (right < s.length) {
        // c 是将移入窗口的字符
        const c = s[right]
        // 右移窗口
        right++
        // 进行窗口内数据的一系列更新
        if (need[c]) {
            if (!window[c]) {
                window[c] = 0
            }
            window[c]++

            if (window[c] === need[c])
                valid++
        }

        // 判断左侧窗口是否要收缩
        while (valid === Object.keys(need).length) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left
                len = right - left
            }
            // d 是将移出窗口的字符
            const d = s[left]
            // 左移窗口
            left++
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] === need[d])
                    valid--
                window[d]--
            }                    
        }
    }
    // 返回最小覆盖子串
    return len === Number.MAX_SAFE_INTEGER ?
        '' : s.substr(start, len)
};