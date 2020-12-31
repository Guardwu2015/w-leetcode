import eraseOverlapIntervals from '../../../greedy/non-overlapping-intervals/eraseOverlapIntervals-1.js'

const intervals1 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]

test('findContentChildren(intervals1) to equal 1', () => {
    expect(eraseOverlapIntervals(intervals1)).toBe(1)
})

const intervals2 = [
    [1, 2],
    [1, 2],
    [1, 2]
]

test('findContentChildren(intervals2) to equal 2', () => {
    expect(eraseOverlapIntervals(intervals2)).toBe(2)
})

const intervals3 = [
    [1, 2],
    [2, 3]
]

test('findContentChildren(intervals3) to equal 0', () => {
    expect(eraseOverlapIntervals(intervals3)).toBe(0)
})