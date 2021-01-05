import { fib1, fib2 } from '../../../dp/fibonacci-number/fib.js'



test('fib1(1) to equal 1', () => {
    expect(fib1(1)).toBe(1)
})

test('fib2(2) to equal 1', () => {
    expect(fib2(2)).toBe(1)
})

test('fib1(10) to equal 55', () => {
    expect(fib1(10)).toBe(55)
})

test('fib2(10) to equal 55', () => {
    expect(fib2(10)).toBe(55)
})

