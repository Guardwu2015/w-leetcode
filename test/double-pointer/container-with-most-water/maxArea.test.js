import maxArea from '../../../double-pointer/container-with-most-water/maxArea.js'

const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
test('maxArea(arr1) to equal 49', () => {
    expect(maxArea(arr1)).toBe(49)
})

const arr2 = [1, 1]
test('maxArea(arr2) to equal 1', () => {
    expect(maxArea(arr2)).toBe(1)
})

const arr3 = [4, 3, 2, 1, 4]
test('maxArea(arr3) to equal 16', () => {
    expect(maxArea(arr3)).toBe(16)
})

const arr4 = [1, 2, 1]
test('maxArea(arr4) to equal 2', () => {
    expect(maxArea(arr4)).toBe(2)
})