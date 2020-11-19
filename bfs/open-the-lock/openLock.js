// https://leetcode-cn.com/problems/open-the-lock/
/**
 * 思路：bfs
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(target === null) {
        return -1
    }
    if (target === '0000') {
        return 0
    }

    let start = '0000'
    if(deadends.includes(target) || deadends.includes(start)) {
        return -1
    }
    
    const q = []
    const visited=new Set(deadends)
    let step=0
    q.push(start)
    visited.add(start)

    while(q.length){
        for(let i = q.length; i > 0; i--){
            const cur = q.shift();
            if(target === cur){
                return step
            }

            const nexts = getNexts(cur)
            for(let str of nexts){
                if(!deadends.includes(str) && !visited.has(str)){
                  visited.add(str)
                    q.push(str)
                }
            }
        }
        step++
    }  
    return -1  
};

function getNexts(cur){
    const list=[]
    for(let i=0; i<4; i++){
        const curArr = cur.split('')
        const char = cur.charAt(i)
        curArr[i] = char === '0' ? '9' : Number(char) - 1
        list.push(curArr.join(''));
        curArr[i] = char === '9' ? '0' : Number(char) + 1
        list.push(curArr.join(''))
    }
    return list
}