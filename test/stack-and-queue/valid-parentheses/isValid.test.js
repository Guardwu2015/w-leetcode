import findContentChildren from '../../../stack-and-queue/valid-parentheses/isValid.js'

const str1 = '()'
test('findContentChildren(str1) to equal true', () => {
    expect(findContentChildren(str1)).toBe(true)
})

const str2 = '()[]{}'
test('findContentChildren(str2) to equal true', () => {
    expect(findContentChildren(str2)).toBe(true)
})

const str3 = '(]'
test('findContentChildren(str3) to equal false', () => {
    expect(findContentChildren(str3)).toBe(false)
})

const str4 = '([)]'
test('findContentChildren(str4) to equal false', () => {
    expect(findContentChildren(str4)).toBe(false)
})

const str5 = '{[]}'
test('findContentChildren(str5) to equal true', () => {
    expect(findContentChildren(str5)).toBe(true)
})