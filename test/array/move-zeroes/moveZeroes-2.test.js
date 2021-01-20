import moveZeroes from '../../../array/move-zeroes/moveZeroes-2.js'


const arr = [0, 1, 0, 3, 12]
test('moveZeroes(arr) to equal [1,3,12,0,0]', () => {
    expect(moveZeroes(arr)).toStrictEqual([1, 3, 12, 0, 0])
})
