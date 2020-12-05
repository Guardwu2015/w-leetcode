// https://www.nowcoder.com/questionTerminal/14c0359fb77a48319f0122ec175c9ada
/**
 * 思路：三角形数形结合，向上取整
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @return {number}
 */
const eatGrapes = function (a, b, c) {
  const nums = [a, b, c].sort((m, n) => m -n)
  const sum = a + b + c
  if (nums[0] + nums[1] > nums[2]) {
    return Math.ceil(sum / 3)
  }

  if (nums[2] > 2 * (nums[0] + nums[1])) {
    return Math.ceil(nums[2] / 2)
  }

  return Math.ceil(sum / 3)
}