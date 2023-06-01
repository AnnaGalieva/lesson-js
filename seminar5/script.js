// Задание 1(тайминг 20 минут)
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.Выведите на экран“ Вторник”

const week = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};
console.log(week[2]);


// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname
const user = {
    name: 'Anna',
    surame: 'Galieva',
    age: 39,
}
console.log(`${user.name}-${user.surame}-${user.age}`);
user.lastName = prompt('введите ваше отчество');
console.log(user);
delete user.surame;
console.log(user);


// Задание 2(тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let days = {};
for (let i = 0; i <= 7; i++) {
    days[arr1[i]] = arr2[i];
}
console.log(days);

// const objOne = arr1.reduce((acc, el, i) => ({...acc, [el]: arr2[i] }), {});или
// const objOne = arr1.reduce((acc, el, i) => ({acc[el]=arr2[i] }), {});
// console.log(objOne);


// 1. const obj = { x: 1, y: 2, z: 3 }; Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

const object = { x: 1, y: 2, z: 3 };
for (const key in object) {
    object[key] = object[key] * 2;
}
console.log(object);

// console.log(Math.pow(object[key], 2));



// Задание 3(тайминг 15 минут)
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// Найдите сумму элементов приведенного объекта.
const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

// function Sum(obj) {
//     return Object.values(obj).reduce((acc, item) => { acc += (item instanceof Object) ? Sum(item) : item; return acc; }, 0);
// }
// console.log(Sum(obj));

const sum = Object.values(obj).reduce((acc, item) => {
    return acc + Object.values(obj);
}, 0);
console.log(sum);

// let sumeOne = 0;
// for (const keyOne in obj) {
//     for (const keyTwo in obj[keyOne]) {
//         sumeOne += obj[keyOne][keyTwo];
//     }
// }
// console.log(sumeOne);


// for (key in obj) {
//     let subObj = obj[key]
//     for (key in subObj) {
//         let keySubObj = subObj[key];
//         for (key in keySubObj) {
//             let keyDeepObject = keySubObj[key]
//             sum += keyDeepObject
//         }
//         if (parseInt(keySubObj)) {
//             sum += keySubObj
//         }
//     }
// }
// console.log(sum)



// Задание 4(тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил неверно
const riddles = {
    question: '',
    answer: '',
    askQuestion: function() {
        if (this.question === this.answer) {
            console.log('верно');
        } else {
            console.log('вы проиграли');
        }
    }
};
riddles.askQuestion();