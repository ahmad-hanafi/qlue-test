function getPrima(n) {
    const result = []
    for (let i = 2; i < n; i++) {
        if ( i % 2 !== 0 && i % 3 !== 0) {
            // console.log(i)
            result.push(i)
        } else if ( i < 4) {
            // console.log(i)
            result.push(i)
        }
    }
    return result
}
console.log(getPrima(5))
console.log(getPrima(10))
console.log(getPrima(20))
