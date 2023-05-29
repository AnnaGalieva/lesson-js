// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0– это ноль
// 1– нечетное число
// 2– четное число
// 3– нечетное число…
// 10– четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}



// Задание 2
// Дан массив[1, 2, 3, 4, 5, 6, 7]. Сделайте из этого массива следующий[1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


const randomNumber = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
console.log(randomNumber);
let result = 0;
for (let i = 0; i < randomNumber.length; i++) {
    result += randomNumber[i];
}
console.log(`сумма элементов этого массива ${result}`);
const min = Math.min.apply(Math, randomNumber);
console.log(`минимальное число ${min}`);
for (let i = 0; i < randomNumber.length; i++) {
    const element = randomNumber[i];
    if (element === 3) {
        console.log(`в этом массиве есть число ${element} с индексом ${randomNumber.indexOf(3)}`);
    } else {
        continue;
    }
}

// *
// Необязательное задание.*
// Необходимо вывести горку в консоль(используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx


for (let i = 1; i <= 20; i++) {
    let line = ""
    for (let j = 1; j <= i; j++) {
        line += "x";
    }
    console.log(line);
}