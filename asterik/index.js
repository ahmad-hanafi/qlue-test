const n = 4
let count = 0
for (let i = 1; i <= n; i++) {
    let temp = n
    let result = ''
    for (let j = 1; j <= i; j++) {
        let pembanding = temp + count
            if (n - temp > 1) {
                // console.log(temp, ' <<<< ini temp')
                // console.log(count, ' <<<< ini count')
                temp = 1
            } else if (temp - count >= 1) {
                temp -= count
                // if (pembanding === n) {
                // }
            }
            result += temp + ','
    }
    count++
    console.log(result)
}

/** expected result
4
3,1
2,2
2,1,1
1,1,1,1
 */