// https://leetcode-cn.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = function(n) {
    const isPrim = Array(n).fill(true)
    for (let i = 2; i * i < n; i++) {
        if (isPrim[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrim[j] = false
            }
        }
    }

    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrim[i]) {
            count++
        }
    }

    return count
}