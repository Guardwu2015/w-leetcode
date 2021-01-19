// https://leetcode-cn.com/problems/maximum-subarray

/**
 * 思路：遍历
 * @param {number[]} nums
 * @return {number}
 */

function maxSum(arr) {
    let maxSum = -Infinity,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}

