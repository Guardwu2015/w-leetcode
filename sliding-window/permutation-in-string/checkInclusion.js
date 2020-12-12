// https://leetcode-cn.com/problems/permutation-in-string/

/**
 * 思路：滑动窗口
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const need = {}, window = {}
    const n = s1.length
    for (let i = 0; i < n; i++) {
        const c = s1[i]
        if (!need[c]) 
            need[c] = 0
        need[c]++
    }

    let left = 0, right = 0
    let valid = 0;
    while (right < s2.length) {
        const c = s2[right]
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
        while (right - left >= s1.length) {
            // 在这里判断是否找到了合法的子串
            if (valid == Object.keys(need).length)
                return true;
            const d = s2[left];
            left++;
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] === need[d])
                    valid--
                window[d]--
            }
        }
    }
    // 未找到符合条件的子串
    return false
};