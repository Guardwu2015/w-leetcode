// https://leetcode-cn.com/problems/n-queens/
/**
 * @param {number} n
 * @return {string[][]}
 */
const col = []
const dia1 = []
const dia2 = []
const res = []

const solveNQueens = function (n) {
    const row = []

    // 初始化 col, dia1, dia2
    for (let i = 0; i < n; i++) {
        col[i] = false
    }
    for (let i = 0; i < 2 * n - 1; i++) {
        dia1[i] = false
        dia2[i] = false
    }

    putQueens(n, 0, row)
    return res
}

// 尝试在一个n皇后问题中, 摆放第index行的皇后位置
function putQueens(n, index, row) {
    if (index === n) {
        res.push(generateBoard(n, row))
    }

    for (let i = 0; i < n; i++) {
        // 尝试将第index行的皇后摆放在第i列
        // index + i正对角线下标，index - i + n -1负对角线下标
        if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
            row.push(i)
            col[i] = true
            dia1[index + i] = true
            dia2[index - i + n - 1] = true
            putQueens(n, index + 1, row)
            col[i] = false
            dia1[index + i] = false
            dia2[index - i + n - 1] = false
            row.pop() // 回溯
        }
    }
}

// 展示N-Queens摆放结果
function generateBoard(n, row) {
    const board = []

    for (let i = 0; i < n; i++) {
        const arr = new Array(n).fill('.')
        arr[row[i]] = 'Q'
        board.push(arr.join(''))
    }
    return board
}