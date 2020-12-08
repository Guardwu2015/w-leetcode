// https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * 解法一
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
      for (let i = 0; i < nums.length; i++) {
          
          let newIndex = Math.abs(nums[i]) - 1
          
          if (nums[newIndex] > 0) {
              nums[newIndex] *= -1
          }
      }
      

      const result = []
      
      for (let i = 1; i <= nums.length; i++) {
          
          if (nums[i - 1] > 0) {
              result.push(i)
          }
      }
      
      return result
  }

  /**
 * 解法二：map
 * @param {number[]} nums
 * @return {number[]}
 */