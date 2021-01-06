import coinChange from '../../../dp/coin-change/coinChange.js'


const coins1 = [1, 2, 5], amount1 = 11
test('coinChange(coins1, amount1) to equal 11', () => {
    expect(coinChange(coins1, amount1)).toBe(3)
})

const coins2 = [2], amount2 = 3
test('coinChange(coins1, amount1) to equal -1', () => {
    expect(coinChange(coins2, amount2)).toBe(-1)
})

const coins3 = [1], amount3 = 0
test('coinChange(coins1, amount1) to equal 0', () => {
    expect(coinChange(coins3, amount3)).toBe(0)
})

const coins4 = [1], amount4 = 1
test('coinChange(coins4, amount4) to equal 1', () => {
    expect(coinChange(coins4, amount4)).toBe(1)
})

const coins5 = [1], amount5 = 2
test('coinChange(coins5, amount5) to equal 2', () => {
    expect(coinChange(coins5, amount5)).toBe(2)
})


