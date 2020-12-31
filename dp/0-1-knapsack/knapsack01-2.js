const knapsack01 = function (w, v, C) {

        if(w == null || v == null || w.length !== v.length)
            throw new Error('Invalid w or v');

        if(C < 0) {
          throw new Error('C must be greater or equal to zero.')
        }

        const n = w.length
        if(n == 0 || C == 0) {
          return 0
        }

        // const memo = []
        // // 初始化二维数组memo的值为-1
        // for(let i = 0; i < n; i ++) {
        //   memo[i] = []
        //   for(let j = 0; j <= C; j ++) {
        //     memo[i][j] = -1
        //   }
        // }
        const memo = new Array(n).fill(new Array(C + 1).fill(-1))


        for(let j = 0; j <= C; j ++) {
          memo[0][j] = (j >= w[0] ? v[0] : 0 )
        }

        for(let i = 1; i < n; i ++) {
          for(let j = 0; j <= C; j++) {
              memo[i][j] = memo[i-1][j]
              if(j >= w[i])
                  memo[i][j] = Math.max(memo[i][j], v[i] + memo[i - 1][j - w[i]])
          }
        }

        return memo[n - 1][C]
    }