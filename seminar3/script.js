// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с
// возрастом 17 " (только здесь данные, которые были переданы в функцию)
// 2. Создайте функцию которая возводит переданное число в квадрат
// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или
// отрицательное.В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.


function userInformation(name, surname, age) {
    console.log(`Привет ${name} ${surname} с возрастом ${+age}`);
}
userInformation('Иван', 'Петров', 17);



const num = Number(prompt('Введите число'));

function kvadr() {
    return num * num;
}
console.log(`квадрат числа: ${kvadr()}`);

// const toSquare = num => num ** 2;
// console.log(toSquare(5));



const number = Number(prompt('Введите число'));

function checkNumber() {
    if (number >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}
checkNumber();

// function checkNumberPositivNegative(number) {

//     console.log(+number > 0 ? '+++' : '---');
// }
// checkNumberPositivNegative(10);
// checkNumberPositivNegative(-10);



// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// 1. Дана фукнция
function func(num = 5) {
    console.log(num * num);
}
//Расскажите, каким будет результат каждого из вызовов функции.
func(2); //4
func(3); //9
func(); //25


let param1 = '1';
let param2 = '2';
let param3 = '3';

function sum(param1, param2, param3) {
    return Number(param1) + Number(param2) + Number(param3);
}
console.log(sum(param1, param2, param3));

// const sum = (param1, param2, param3) => param1 + param2 + param3;
// console.log(sum(1, 2, 3));





// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.С помощью этой  функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2 х передаваемых аргументов функции


const numberToSqrt = number => Math.sqrt(+number);
const sum = (param1, param2) => Number(param1) + Number(param2);
sum(numberToSqrt(3), numberToSqrt(4));

// const Square = (number1) => number1 ** 0.5;
// console.log(Square(3));
// console.log(Square(4));
// console.log(Square(3) + Square(4));

// Math.sqrt(Number);
// console.log(Math.sqrt(3));
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(3) + Math.sqrt(4));

// function square(number) {
//     let result = Math.sqrt(number);
//     return result;
// }

// function getSum(callback) {
//     let numb1 = callback(+prompt(''));
//     let numb2 = callback(+prompt(''));
//     let result = numb1 + numb2;
//     return result;
// }
// let finalRes = getSum(square);
// console.log(finalRes);


// function min(v1, v2) {
//     return v1 <= v2 ? v1 : v2;
// }
// console.log(min(7, 5));

function min(v1, v2) {
    return Math.min(v1, v2);
}
console.log(min(7, 5));


// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток(Доброе утро\ день\ вечер\ ночи Иван)

function getDayOfWeek(num) {
    if (num === 1) {
        console.log('Понедельник');
    } else if (num === 2) {
        console.log('Вторник');
    } else if (num === 3) {
        console.log('Среда');
    } else if (num === 4) {
        console.log('Четверг');
    } else if (num === 5) {
        console.log('Пятница');
    } else if (num === 6) {
        console.log('Суббота');
    } else if (num === 7) {
        console.log('Воскресенье');
    } else {
        console.log('Некорректный день недели');
    }
}
getDayOfWeek(1);

// const getDayOfTheWeek = (day) => {
//     switch (day) {
//         case 1:
//             return 'пн';
//         case 2:
//             return 'вт';
//         case 3:
//             return 'ср';
//         case 4:
//             return 'чт';
//         case 5:
//             return 'пт';
//         case 6:
//             return 'сб';
//         case 7:
//             return 'вс';
//     }
//console.log(getDayOfTheWeek(2));


// if (day === 1) {
// return 'пн';
// } else if (day === 2) {
// return 'вт';
// } else if (day === 3) {
// return 'ср';
// } else if (day === 4) {
// return 'чт';
// } else if (day === 5) {
// return 'пт';
// } else if (day === 6) {
// return 'сб';
// } else if (day === 7) {
// return 'вс';
// }

// const currDay = new Date().getDay() - 1;
// const dayArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// console.log(dayArr[currDay]);
// }




let time = (new Date()).getHours();

function setTime(name, time) {
    if (time >= 4 && time < 12) {
        console.log(`Доброе утро ${name}`);
    }
    if (time >= 12 && time < 17) {
        console.log(`Добрый день ${name}`);
    }
    if (time >= 17 && time < 24) {
        console.log(`Добрый вечер ${name}`);
    } else {
        console.log(`Доброй ночи ${name}`);
    }
}
setTime('Иван', 5);


// const getMessage = (name) => {
//     const currentHours = new Date().getHours();

//     if (currentHours >= 6 && currentHours < 12) {
//         return `Доброе утро, ${name}`;
//     } else if (currentHours >= 12 && currentHours < 16) {
//         return `Добрый день, ${name}`;
//     } else if (currentHours >= 16 && currentHours < 21) {
//         return `Добрый вечер, ${name}`;
//     } else if (currentHours >= 21 && currentHours < 6) {
//         return `Доброй ночи, ${name}`;
//     }
// }
//  console.log(getMessage('Иван'));



// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// Добавить подсказку, если пользователь ответил неверно

function task(userAnswer, realAnswer) {
    if (userAnswer.toLowerCase() === realAnswer) {
        alert('Молодец, ты угадал');
        return true;
    } else {
        let secondAnswer;
        let hints = ['Это что-то зеленое', 'Эту штуку мы украшаем на НГ', 'У нее иголки вместо листьев'];
        for (let i = 0; i < hints.length; i++) {
            secondAnswer = prompt(`Не правильно. Подсказка: ${hints[i]}`);
            if (secondAnswer.toLowerCase() === realAnswer) {
                alert('Молодец');
                return true;
            } else {
                alert('Опять не угадал :(');
            }
        }
        return false;
    }
}
task(prompt('Зимой и летом одним цветом'), 'елка');