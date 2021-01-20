import intersect from '../../../array/intersection-of-two-arrays-ii/intersect.js'

const nums11 = [1, 2, 2, 1], nums12 = [2, 2]
test('intersect(nums11, nums12) to equal [2, 2]', () => {
    expect(intersect(nums11, nums12)).toStrictEqual([2, 2])
})

const nums21 = [4, 9, 5], nums22 = [9, 4, 9, 8, 4]
test('intersect(nums21, nums22) to equal [9, 4]', () => {
    expect(intersect(nums21, nums22)).toStrictEqual([9, 4])
})