import intersection from '../../../array/intersection-of-two-arrays/intersection.js'

const nums11 = [1, 2, 2, 1], nums12 = [2, 2]
test('intersection(nums11, nums12) to equal [2]', () => {
    expect(intersection(nums11, nums12)).toStrictEqual([2])
})

const nums21 = [4, 9, 5], nums22 = [9, 4, 9, 8, 4]
test('intersection(nums21, nums22) to equal [9, 4]', () => {
    expect(intersection(nums21, nums22)).toStrictEqual([9, 4])
})