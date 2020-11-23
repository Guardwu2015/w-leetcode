// https: //leetcode-cn.com/problems/sliding-puzzle/
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    const target = [1, 2, 3, 4, 5, 0]
    let queue = [[].concat(...board)]
    let visited = {},
        step = 0

    const neighbor = [
        [1, 3],
        [0, 4, 2],
        [1, 5],
        [0, 4],
        [3, 1, 5],
        [4, 2]
    ]

    while (queue.length) {
        let len = queue.length
        while (len--) {
            const cur = queue.shift();
            if (cur.toString() === target.toString()) {
                return step
            }
            const idx = cur.findIndex(v => !v)
            for (let j = 0; j < neighbor[idx].length; j++) {
                let adj = neighbor[idx][j]
                let list = [...cur];
                [list[adj], list[idx]] = [list[idx], list[adj]]
                if (!visited[list.toString()]) {
                    queue.push(list)
                    visited[list.toString()] = true
                }
            }
        }
        step++
    }
    return -1
}