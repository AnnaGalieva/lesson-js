// Дан массив[1, 2, 3] необходимо найти элементы массива большие и равные 3
const mass = [1, 2, 3];
for (let i = 0; i < mass.length; i++) {
    const element = mass[i];
    if (element >= 3) {
        console.log(element);
    } else {
        continue;
    }
    console.log(element);
}




// Дан массив[1, 2, 3] необходимо найти сумму элементов массива
let arr1 = [1, 2, 3];

function massSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
massSum(arr1);

// Дана переменная a = 4, ее необходимо добавить в конец массива[1, 2, 3]
const mass1 = [1, 2, 3];
mass1.push(4);
console.log(mass1);

// Дана переменная b = 0, ее необходимо добавить в начало массива[1, 2, 3]
const mass2 = [1, 2, 3];
mass2.unshift(0);
console.log(mass2);


//hello

for (let i = 0; i < 3; i++) {
    console.log('hello for');
}

for (let j = 0; j <= 2; j++) {
    console.log('j');

}

//dowhile
// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert('Пароль неверный');
//     }
//     pass = Number(prompt('Введите пароль'));
//     count++;

// } while (pass !== 234); //не равен

// //massiv
//const arr = [];
// arr.push(1);
// console.log(arr);

// const arr = [1, 2, 'hello'];
// console.log(arr);
// console.log(arr[0]); //1
// console.log(arr.length); //длина массива
// console.log(arr[arr.length - 1]); //hello последний элемент

// //push
// const user = [];
// user.push(prompt('Ваше имя'));
// user.push(+prompt('Ваш возраст'));
// console.log(user);

// //pop
// const numbers = [2, 3, 19, 25];
// alert(`Запомни цифры ${numbers}`);
// console.log(numbers.pop());
// console.log(numbers); //массив стал меньшеo


// const words = 'example';
// const arrWord = words.split('');
// console.log(arrWord.pop()); //последняя буква
// const upWord = arrWord.pop();
// console.log(upWord.toUpperCase()); //последняя заглавная
// arrWord.push(upWord.toUpperCase()); //соединили заглавную с словом
// console.log(arrWord.join(''));

// //
// const arr = [1, 2, 3, 7, 19];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
//     console.log(element);
// }
// console.log(arr.indexOf('3'));



// const arrAnswer = ['елка', 'ёлка', 'ель'];
// const userAnswer = prompt('Зимой и летом одним цветом');
// for (let i = 0; i < arrAnswer.length; i++) {
//     const element = arrAnswer[i];
//     if (element === userAnswer) {
//         console.log('молодец');
//         break;
//     } else {
//         continue;
//     }
// }