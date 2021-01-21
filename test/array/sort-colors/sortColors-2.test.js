import sortColors from '../../../array/sort-colors/sortColors-2.js'

const arr1 = [1, 0, 2, 1, 2, 1]
test('sortColors(arr1) to equal [0, 1, 1, 1, 2, 2]', () => {
    expect(sortColors(arr1)).toStrictEqual([0, 1, 1, 1, 2, 2])
})

const arr2 = [1, 0, 2, 0, 2, 1]
test('sortColors(arr2) to equal [0, 0, 1, 1, 2, 2]', () => {
    expect(sortColors(arr2)).toStrictEqual([0, 0, 1, 1, 2, 2])
})

const arr3 = [2, 0]
test('sortColors(arr3) to equal [0, 2]', () => {
    expect(sortColors(arr3)).toStrictEqual([0, 2])
})

const arr4 = [1]
test('sortColors(arr3) to equal [1]', () => {
    expect(sortColors(arr4)).toStrictEqual([1])
})