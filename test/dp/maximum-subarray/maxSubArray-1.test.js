import maxSubArray from '../../../dp/maximum-subarray/maxSubArray-1.js'

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
test('maxSubArray(arr1) to equal 6', () => {
    expect(maxSubArray(arr1)).toBe(6)
})

const arr2 = [1, 2, 3, 4, -2, 5, -20]
test('maxSubArray(arr2) to equal 13', () => {
    expect(maxSubArray(arr2)).toBe(13)
})