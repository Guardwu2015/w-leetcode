import findKthLargest from '../../../array/kth-largest-element-in-an-array/findKthLargest.js'

const arr1 = [3, 2, 1, 5, 6, 4], k1 = 2
test('findKthLargest(arr1, k1) to equal 5', () => {
    expect(findKthLargest(arr1, k1)).toBe(5)
})
