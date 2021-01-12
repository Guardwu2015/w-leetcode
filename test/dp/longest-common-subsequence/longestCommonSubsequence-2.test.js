import longestCommonSubsequence from '../../../dp/longest-common-subsequence/longestCommonSubsequence-2.js'

const text11 = "abcde", text12 = "ace"
test('longestCommonSubsequence(text1, text2) to equal 3', () => {
    expect(longestCommonSubsequence(text11, text12)).toBe(3)
})

const text21 = "abc", text22 = "abc"
test('longestCommonSubsequence(text21, text22) to equal 3', () => {
    expect(longestCommonSubsequence(text21, text22)).toBe(3)
})

const text31 = "abcde", text32 = "def"
test('longestCommonSubsequence(text31, text32) to equal 2', () => {
    expect(longestCommonSubsequence(text31, text32)).toBe(2)
})

const text41 = "abc", text42 = "def"
test('longestCommonSubsequence(text41, text42) to equal 0', () => {
    expect(longestCommonSubsequence(text41, text42)).toBe(0)
})
