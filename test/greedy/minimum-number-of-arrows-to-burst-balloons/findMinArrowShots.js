import findMinArrowShots from '../../../greedy/minimum-number-of-arrows-to-burst-balloons/findMinArrowShots.js'

const points1 = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
]

test('findContentChildren(points1) to equal 2', () => {
    expect(findMinArrowShots(points1)).toBe(2)
})


const points2 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]

test('findContentChildren(points2) to equal 4', () => {
    expect(findMinArrowShots(points2)).toBe(4)
})

const points3 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
]

test('findContentChildren(points3) to equal 2', () => {
    expect(findMinArrowShots(points3)).toBe(2)
})

const points4 = [
    [1, 2]
]

test('findContentChildren(points4) to equal 1', () => {
    expect(findMinArrowShots(points4)).toBe(1)
})

const points5 = [
    [2, 3],
    [2, 3]
]

test('findContentChildren(points5) to equal 1', () => {
    expect(findMinArrowShots(points5)).toBe(1)
})