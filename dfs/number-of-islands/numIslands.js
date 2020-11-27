/// 200. Number of Islands
/// https://leetcode.com/problems/number-of-islands/description/
/// 时间复杂度: O(n*m)
/// 空间复杂度: O(n*m)

const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
] // 上，右，下，左
let m, n
const visited = []

const numIslands = function (grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0
    }

    m = grid.length
    n = grid[0].length

    // 初始化visited
    for (let i = 0; i < m; i++) {
        visited[i] = []
        for (let j = 0; j < n; j++) {
            visited[i][j] = false
        }
    }

    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(grid, i, j)
                res++
            }
        }
    }

    return res
}

// 从grid[x][y]的位置开始,进行floodfill
// 保证(x,y)合法,且grid[x][y]是没有被访问过的陆地

function dfs(grid, x, y) {
    visited[x][y] = true
    for (let i = 0; i < 4; i++) {
        const newX = x + d[i][0]
        const newY = y + d[i][1]
        if (inArea(newX, newY) && !visited[newX][newY] && grid[newX][newY] === '1') {
            dfs(grid, newX, newY)
        }
    }

    return
}

function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n
}

const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]

const result1 = numIslands(grid1)
console.log(result1)

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
]

const result2 = numIslands(grid2)
console.log(result2)