import maximalSquare from '../../../dp/maximal-square/maximalSquare.js'

const matrix1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]
test('maximalSquare(matrix1) to equal 4', () => {
    expect(maximalSquare(matrix1)).toBe(4)
})

const matrix2 = [
    ["0", "1"],
    ["1", "0"]
]
test('maximalSquare(matrix2) to equal 1', () => {
    expect(maximalSquare(matrix2)).toBe(1)
})

const matrix3 = [
    ["0"]
]
test('maximalSquare(matrix3) to equal 0', () => {
    expect(maximalSquare(matrix3)).toBe(0)
})

const matrix4 = [
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"]
]
test('maximalSquare(matrix4) to equal 4', () => {
    expect(maximalSquare(matrix4)).toBe(4)
})

const matrix5 = [
    ["0", "1"],
    ["1", "0"]
]
test('maximalSquare(matrix5) to equal 1', () => {
    expect(maximalSquare(matrix5)).toBe(1)
})
