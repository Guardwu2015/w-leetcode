// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    const need = {}, window = {}
    const n = p.length
    for (let i = 0; i < n; i++) {
        const c = p[i]
        if (!need[c]) 
            need[c] = 0
        need[c]++
    }

    let left = 0, right = 0
    let valid = 0
    const res = []
    while (right < s.length) {
        const c = s[right]
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
        while (right - left >= p.length) {
            // 在这里判断是否找到了合法的子串
            if (valid === Object.keys(need).length)
                res.push(left)
            const d = s[left]
            left++
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] === need[d])
                    valid--
                window[d]--
            }
        }
    }

    return res
}
