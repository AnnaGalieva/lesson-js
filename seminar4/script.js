// Задание 1
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
const arr = [1, 2, 3];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// 2. Создайте массив с произвольными элементами.Выведите на экран количество элементов в этом массиве.
const arr1 = [1, 2, 3, 6, 8];
console.log(arr1.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'.Запишите вместо первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.
const arr2 = ['a', 'b', 'c'];
arr2[0] = '1';
arr2[1] = '-2';
arr2[2] = '-3';
console.log(arr2);

//Задание 2
//1. Создайте массив с элементами 1, 2 и 3. С помощью оператора++увеличьте каждый элемент массива на единицу.
const arr3 = [1, 2, 3];
arr3[0]++;
arr3[1]++;
arr3[2]++;
console.log(arr3);

// const arr3 = [1, 2, 3];
// for (let i = 0; i < arr3.length; i++) {
//     arr3 = ++arr3[i];
// }
// console.log(arr3);

//2. Узнайте длину следующего массива: 
const arr4 = [];
arr4[3] = 'a';
arr4[8] = 'b';
console.log(arr4.length); //9


// 1. Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.

const arr5 = [1, 2, 3];
arr5.push(4, 5);
console.log(arr5);

// 1. Создайте произвольный массив из 5 элементов, Удалите из него два элемента.Проверьте, какое станет значение свойства length после этого.
const arr6 = [1, 2, 3, 7, 9];
console.log(arr6.pop());
console.log(arr6.pop());
console.log(arr6);
console.log(arr6.length);

//Задание3
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// 2. С помощью цикла  for выведите в консоль нечетные числа в  промежутке от 1 до 99.
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// 3. С помощью цикла  for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// 4. Дано число num с неким начальным значением.Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.Какое число получится ? Посчитайте количество итераций,необходимых для этого.

let num = 300;
let count = 0;
while (num < 1000) {
    num *= 3;
    count++;
}
console.log(num, count);





const resultOfProduct = number => number * 3;

function allCount(num) {

    let count = 0;

    while (num <= 1000) {
        num += resultOfProduct(num);
        count++;
    }
    console.log(count);
    console.log(num);
    return num;
}

const resultOfAll = allCount(5);

// for (num = 300, i = 0; num >= 1000; num = num * 3, i++);
// console.log(num, i);


//Задание 4
// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3 - х, но  меньше 10.
const arr7 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] <= 3)
        continue;
    if (arr7[i] >= 10)
        continue;

    console.log(arr7[i]);
}
// if (arr[i] > 3 && arr[i] < 10) {
//     alert(arr[i]);
// }


//1. Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i <= 100; i++) {
    res += i;
}
console.log(res);

// 2. Дан массив  const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
const arr8 = [2, 5, 9, 3, 1, 4];
let result = 0;
for (let i = 0; i < arr8.length; i++) {
    result += arr8[i];
}
console.log(result);




// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

let str = '';
for (let i = 1; i <= 9; i++) {
    str += i + '-';
}
console.log('-' + str);


// 2. Дан массив с числами.const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0.После этого цикл должен завершить свою работу.

const arr9 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === 0) {
        break;
    } else {
        console.log(arr9[i]);
    }

}

//Задание 5
// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами.Давайте переберем его циклом и числа,
//которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
// const arr10 = [2, 5, 9, 0, 3, 1, 4, 8, 7, 6];
// for (let elem of arr) {
//     let result;
//     if (elem % 2 == 0) {
//         result = elem * elem;
//     } else if (elem % 3 == 0) {
//         result = elem * elem * elem;
//     } else {
//         continue;
//     }
//     console.log(result);
// }


// const arr10 = [2, 5, 9, 0, 3, 1, 4, 8, 7, 6];
// for (let i = 0; i < arr10.length; i++) {
//     let result;
//     if (i % 2 == 0) {
//         result = i * i;
//     } else if (i % 3 == 0) {
//         result = i * i * i;
//     } else {
//         continue;
//     }
//     console.log(result);
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        console.log(`Число ${array[index]} в квадрате: ${Math.pow(array[index], 2)}.`);
    } else if (array[index] % 3 == 0) {
        console.log(`Число ${array[index]} в кубе: ${Math.pow(array[index], 3)}.`);
    }
}



// 2. С помощью двух вложенных циклов выведите на экран следующую строку:[[1,2,3][4,5,6]]

let array12 = [];
let rows = 2;
let columns = 3;
let counter = 0;
for (let i = 0; i < rows; i++) {
    array12[i] = [];
    for (let j = 0; j < columns; j++) {
        array12[i][j] = ++counter;
    }
}
console.log(array12);


// 3. Дан массив
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
const arr11 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
count = 0;
for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] === 3) {
        count++;
    }
    console.log(count);
}




// 1. Дан следующий массив: [1, 2, 3, 4, 5]С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 2);
console.log(arr12);