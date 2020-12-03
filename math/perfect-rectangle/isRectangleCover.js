// https://leetcode-cn.com/problems/perfect-rectangle

/**
 * 思路，面积相等，顶点数
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const isRectangleCover = function(rectangles) {
        let xMax = -Infinity, yMax = -Infinity
            xMin = Infinity, yMin = Infinity

        let actualArea = 0
        let points = new Set()
        for (let rectangle of rectangles) {
            const [x1, y1, x2, y2] = rectangle
            xMin = Math.min(xMin, x1)
            yMin = Math.min(yMin, y1)
            xMax = Math.max(xMax, x2)
            yMax = Math.max(yMax, y2)
            actualArea += (x2 - x1) * (y2 - y1)
            for (let p of [`${x1}${y1}`, `${x1}${y2}`, `${x2}${y1}`, `${x2}${y2}`]) {
                if (points.has(p)) {
                    points.delete(p)
                } else {
                    points.add(p)
                }
            }
        }

        const expectArea = (yMax - yMin) * (xMax - xMin)
        if (actualArea !== expectArea) {
            return false
        }

        points = [...points]

        if (points.length !== 4) {
            return false
        }
        for (let p of [`${xMin}${yMin}`, `${xMin}${yMax}`, `${xMax}${yMin}`, `${xMax}${yMax}`]) {
            if (!points.includes(p)) {
                return false
            }
        }

        return true
};