const input = JSON.parse
console.log(input)
const result = {}

for (let i = 0; i < input.length; i++) {
    // console.log(input[i].name)
    const namaGrup = input[i].name
    if (result[namaGrup] === undefined) {
        result[namaGrup] = 0
    } 
    result[namaGrup]++
}

for (const key in result) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}