import subarraySum from '../../../array/subarray-sum-equals-k/subarraySum-1.js'

const nums1 = [1, 1, 1], k1 = 2
test('subarraySum(nums1, k1) to equal 2', () => {
    expect(subarraySum(nums1, k1)).toBe(2)
})

const nums2 = [1, 2, 3], k2 = 5
test('subarraySum(nums2, k2) to equal 1', () => {
    expect(subarraySum(nums2, k2)).toBe(1)
})

const nums3 = [1, 2, 3], k3 = 3
test('subarraySum(nums3, k3) to equal 2', () => {
    expect(subarraySum(nums3, k3)).toBe(2)
})