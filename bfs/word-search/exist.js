// https://leetcode-cn.com/problems/word-search/
/**
 * 思路：bfs
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let m, n
const d = [[1, 0], [-1, 0], [0, 1], [0, -1]]
const visited = []

const exist = function(board, word) {
    if (board === null || word === null) {
        return false
    }
    m = board.length
    if (m === 0) {
        return false
    }
    n = board[0].length

    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (bfs(board, word, 0, i, j)) {
                return true
            }
        }
    }

    return false
};

function bfs(board, word, index, x, y) { // index记录单词的长度
    if (index === word.length - 1) {
        return board[x][y] === word.charAt(index)
    }

    if (board[x][y] === word.charAt(index)) {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            const newX = x + d[i][0]
            const newY = y + d[i][1]
            if(inArea(newX, newY) && !visited[newX][newY]  
                && bfs(board, word, index + 1, newX, newY)) {
                return true
            }
        }
        visited[x][y] = false
    }

    return false;
}

function inArea(x, y) {
    return x >=0 && x < m && y >=0 && y < n
}