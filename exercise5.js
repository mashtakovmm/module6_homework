// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const arr = [1, 54, 452, 21]

console.log(arr.length)

arr.map(function(item, index, array) {
    console.log(item)
})