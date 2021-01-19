// discription: 一个有N个整数项的一维数组， 这个数组有很连续多子数组， 那么子数组之和的最大值是多少？
// [1, -3, 3, 4, 5, -3] 返回12；
// [-1, -2, -3, -4, -9, -8] 返回 - 1；

function maxSum(arr) {
    let maxSum = -Infinity,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}

