// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function sum(a, b) {
    return a+b
}

function higherSum (number) {
    return sum(number, 42)
}
