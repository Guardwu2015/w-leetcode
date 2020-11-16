// https://leetcode-cn.com/problems/3sum/

/**
 * 思路：双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const arr = nums.sort()
    const res = []
    const len = nums.length

    if (nums === null || len < 3) {
        return []
    }

    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }
        let j = i + 1
        let k = len - 1
        while (j < k) {
            const curr = arr[i] + arr[j] + arr[k]
            if (curr === 0) {
                res.push([arr[i], arr[j], arr[k]])
                while (j < k && arr[j] === arr[j + 1]) {
                    j += 1
                }
                while (j < k && arr[k] === arr[k - 1]) {
                    k -= 1
                }
                j += 1
                k -= 1
            } else if (curr < 0) {
                j += 1
            } else {
                k -= 1
            }

        }
    }

    return res
}