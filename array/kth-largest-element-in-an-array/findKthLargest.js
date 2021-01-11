// https://leetcode-cn.com/problems/kth-largest-element-in-an-array

/**
 * 思路一，快排
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let lo = 0, hi = nums.length - 1;

    k = nums.length - k;
    while (lo <= hi) {
        let p = partition(nums, lo, hi);
        if (p < k) {
            lo = p + 1;
        } else if (p > k) {
            hi = p - 1;
        } else {
            return nums[p];
        }
    }
    return -1;
}

function partition(nums, lo, hi) {
    if (lo == hi) return lo;
    const pivot = nums[lo];
    let i = lo, j = hi + 1;
    while (true) {
        while (nums[++i] < pivot) {
            if (i === hi) break;
        }
        while (nums[--j] > pivot) {
            if (j === lo) break;
        }
        if (i >= j) break;

        swap(nums, i, j);
    }

    swap(nums, j, lo);

    return j;
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

/**
 * 思路二，二叉堆
 */