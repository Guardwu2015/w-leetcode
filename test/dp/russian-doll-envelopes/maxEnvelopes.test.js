import maxEnvelopes from '../../../dp/russian-doll-envelopes/maxEnvelopes.js'

const envelopes = [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]
]

test('maxEnvelopes to equal 3', () => {
    expect(maxEnvelopes(envelopes)).toBe(3)
})
