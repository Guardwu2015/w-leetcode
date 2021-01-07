import change from '../../../dp/coin-change-2/change-1.js'


const amount1 = 5, coins1 = [1, 2, 5]
test('change(mount1, coins1) to equal 4', () => {
    expect(change(amount1, coins1)).toBe(4)
})


const amount2 = 3, coins2 = [2]
test('change(mount2, coins2) to equal 0', () => {
    expect(change(amount2, coins2)).toBe(0)
})

const amount3 = 10, coins3 = [10]
test('change(mount3, coins3) to equal 1', () => {
    expect(change(amount3, coins3)).toBe(1)
})


