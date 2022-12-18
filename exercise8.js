// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let map = new Map();

map.set("1", 'one')
map.set(54, 'ff')
map.set("100", '100')
map.set(true, '1')
map.set(false, 'net')

for (let elem of map) {
    console.log(`Key - ${elem[0]}, value - ${elem[1]}`);
 }