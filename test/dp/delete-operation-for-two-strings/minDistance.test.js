import minDistance from '../../../dp/delete-operation-for-two-strings/minDistance'

const word11 = 'sea', word12 = 'eat'
test('minDistance(word11, word12) to equal 2', () => {
    expect(minDistance(word11, word12)).toBe(2)
})

const word21 = 'sea', word22 = 'def'
test('minDistance(word1, word2) to equal 4', () => {
    expect(minDistance(word21, word22)).toBe(4)
})