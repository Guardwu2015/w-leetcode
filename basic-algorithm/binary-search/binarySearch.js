/**
 * 
 * @param {Number[]} nums 
 * @param {Number} target
 * @return {Number}
 */
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = left + (right - left) / 2
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if(nums[mid] == target) {
            // 直接返回
            return mid
        }
    }
    // 直接返回
    return -1
}

function left_bound(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = left + (right - left) / 2
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] == target) {
            // 别返回，锁定左侧边界
            right = mid - 1
        }
    }
    // 最后要检查 left 越界的情况
    if (left >= nums.length || nums[left] != target)
        return -1
    return left
}


function right_bound(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = left + (right - left) / 2
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1
        }
    }
    // 最后要检查 right 越界的情况
    if (right < 0 || nums[right] != target)
        return -1
    return right
}