import threeSum from '../../../math/three-sum/threeSum.js'

const nums1 = [-1, 0, 1, 2, -1, -4]
test('threeSum(nums1) to equal [[-1,-1,2],[-1,0,1]]', () => {
    expect(threeSum(nums1)).toStrictEqual([
        [-1, -1, 2],
        [-1, 0, 1]
    ])
})

const nums2 = []
test('threeSum(nums2) to equal []', () => {
    expect(threeSum(nums2)).toStrictEqual([])
})

const nums3 = [0]
test('threeSum(nums3) to equal []', () => {
    expect(threeSum(nums3)).toStrictEqual([])
})
