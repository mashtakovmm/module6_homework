// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

function func1 () {
    const arr = [1, 54, 654, 2, 0, 0, NaN, 'fdsfsdf']
    let odds = 0
    let evens = 0
    let zeros = 0
    
    for (let i=0; i < arr.length; i++) {
        if(typeof arr[i] == "number") {
            if(arr[i] == 0) {
                zeros++
            } else if (arr[i] == arr[i]) {
                if (arr[i]%2 == 0) {
                    evens++
                } else {
                    odds++
                }
            }
        }
    }
    
    console.log(`Четных - ${evens}`)
    console.log(`Нечетных - ${odds}`)
    console.log(`Нулей - ${zeros}`)
}