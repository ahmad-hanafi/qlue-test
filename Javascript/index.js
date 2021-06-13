const input = '[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height":1.8}]'
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
console.log(result)
// for (const key in result) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }