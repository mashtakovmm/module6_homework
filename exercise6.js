// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const arr1 = [32, 43, 244]
const arr2 = [4, 4, 4 ,4]

let check1 = new Set(arr1).size
let check2 = new Set(arr2).size
console.log('Для первого массива')
console.log(!(arr1.length == check1))
console.log('Для второго массива')
console.log(!(arr2.length == check2))