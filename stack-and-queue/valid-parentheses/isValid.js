// https: //leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            const top = stack.pop()
            if (top !== pairs[c]) {
                return false
            }
        }
    }

    return stack.length === 0
}

const pairs = {
    '}': '{',
    ')': '(',
    ']': '['
}

// const res = isValid('{[]}')
// console.log(res)