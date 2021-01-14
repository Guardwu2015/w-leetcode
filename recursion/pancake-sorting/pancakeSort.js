// https://leetcode-cn.com/problems/pancake-sorting

/**
 * 思路，找到最大并翻转到最下面
 * @param {number[]} arr
 * @return {number[]}
 */

const pancakeSort = function(arr) {
    const res = []
    sort(arr, arr.length, res)
    return res
};


function sort(cakes, n, res) {
    // base case
    if (n === 1) return

    // 寻找最大饼的索引
    let maxCake = 0
    let maxCakeIndex = 0
    for (let i = 0; i < n; i++) {
        if (cakes[i] > maxCake) {
            maxCakeIndex = i
            maxCake = cakes[i]
        }
    }

    // 第一次翻转，将最大饼翻到最上面
    reverse(cakes, 0, maxCakeIndex)
    res.push(maxCakeIndex + 1)
    // 第二次翻转，将最大饼翻到最下面
    reverse(cakes, 0, n - 1)
    res.push(n)

    // 递归调用
    sort(cakes, n - 1, res)
}

function reverse(arr, i, j) {
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++, j--
    }
}