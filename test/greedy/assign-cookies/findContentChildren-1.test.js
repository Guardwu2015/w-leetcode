import findContentChildren from '../../../greedy/assign-cookies/findContentChildren-1.js'

const g1 = [1, 2, 3]
const s1 = [1, 1]

test('findContentChildren(g1, s1) to equal 1', () => {
    expect(findContentChildren(g1, s1)).toBe(1)
})

const g2 = [1, 2]
const s2 = [1, 2, 3]

test('findContentChildren(g2, s2) to equal 2', () => {
    expect(findContentChildren(g2, s2)).toBe(2)
})