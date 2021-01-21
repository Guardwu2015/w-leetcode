import sortColors from '../../../array/sort-colors/sortColors-2.js'

const arr1 = [1, 0, 2, 1, 2, 1]
test('sortColors to equal [0, 1, 1, 1, 2, 2]', () => {
    expect(sortColors(arr1, n)).toStrictEqual([0, 1, 1, 1, 2, 2])
})