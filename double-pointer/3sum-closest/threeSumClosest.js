// https://leetcode-cn.com/problems/3sum-closest/

/**
 * 思路：双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    const n = nums.length;
    let best = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < n; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1,
            k = n - 1
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum == target) {
                return target
            }

            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum
            }
            if (sum > target) {
                let k0 = k - 1
                while (j < k0 && nums[k0] === nums[k]) {
                    --k0
                }
                k = k0
            } else {
                let j0 = j + 1
                while (j0 < k && nums[j0] === nums[j]) {
                    ++j0
                }
                j = j0
            }
        }
    }
    return best
}

export default threeSumClosest