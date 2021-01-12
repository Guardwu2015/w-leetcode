// https://leetcode-cn.com/problems/n-queens/
/**
 * @param {number} n
 * @return {string[][]}
 */
const res = []
const solveNQueens = function(n) {
  const board = new Array(n).fill(new Array.fill('.'))

  backtrack(board, 0)

  return res
}

function backtrack(board, row) {
  if (row === board.length - 1) {
    res.push(board)
  }

  const n = board[row].length
  for (let col = 0; col < n; col++) {
    if (!isValid(board, row, col)) {
      continue
    }

    board[row][col] = 'Q'
    backtrack(board, row + 1)
    board[row][col] = '.'
  }
}

function isValid(board, row, col) {
  const n = board.length
  // 检查列是否有皇后互相冲突
  for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
  }
  // 检查右上方是否有皇后互相冲突
  for (let i = row - 1, j = col + 1; 
          i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
  }
  // 检查左上方是否有皇后互相冲突
  for (let i = row - 1, j = col - 1;
          i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
  }
  return true
}