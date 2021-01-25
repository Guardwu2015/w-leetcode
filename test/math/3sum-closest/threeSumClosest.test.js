import threeSumClosest from '../../../math/3sum-closest/threeSumClosest.js'

const nums = [-1, 2, 1, -4], target = 1
test('threeSumClosest(nums, target) to equal 2', () => {
    expect(threeSumClosest(nums, target)).toBe(2)
})