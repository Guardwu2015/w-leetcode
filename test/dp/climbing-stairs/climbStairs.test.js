import {
    climbStairs1,
    climbStairs2
} from '../../../dp/climbing-stairs/climbStairs.js'



test('climbStairs1(1) to equal 1', () => {
    expect(climbStairs1(1)).toBe(1)
})

test('climbStairs2(2) to equal 2', () => {
    expect(climbStairs2(2)).toBe(2)
})

test('climbStairs1(10) to equal 89', () => {
    expect(climbStairs1(10)).toBe(89)
})

test('climbStairs2(20) to equal 10946', () => {
    expect(climbStairs2(20)).toBe(10946)
})
