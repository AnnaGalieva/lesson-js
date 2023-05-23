// function helloName(name) {
//     console.log(name);
// }
// helloName('Anna');


// let count = 5;

// function counter() {
//     return count++;
// }
// counter(); //6
// counter(); //7
// console.log(count);





// let age = Number(prompt('Сколько вам лет?'));
// const lvlUpAge = () => {
//     return age + 5; //const lvlUpAge = () => age + 5;
// }
// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);






// function hello() {
//     console.log('Hello function');
// }
// hello();
// const sum = (param1, param2) => {
//     return param1 + param2;
// }
// console.log(sum(2, 5));




// const salary = (money) => {
//     money = money * 0.87; //money-money*0.13
//     return money * 0.75;
// }
// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));
// // console.log(salary(userMoney));
// let moneyMonth = salary(userMoney);
// console.log(`для расходов можно использовать ${salary(userMoney)}`);
// console.log(`на еду желательно потратьть не более чем ${moneyMonth*0.3}`);




//кнопка
// function sayHello() {
//     alert('Привет');
//     alert('Нажали на кнопку');
// }



//игра загадка
// let userAnswer = prompt('Зимой и летом одним цветом');
// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }



// let userAnswer2 = prompt('Сидит дед во 100 шуб одет,кто его раздевает, тот слезы проливает');
// if (userAnswer2 === 'лук') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }


function askQuestion(answer, question) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }
}
// askQuestion('лук', 'Сидит дед во 100 шуб одет,кто его раздевает, тот слезы проливает');
// askQuestion('елка', 'Зимой и летом одним цветом');


function puzzle() {
    askQuestion('лук', 'Сидит дед во 100 шуб одет,кто его раздевает, тот слезы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом');

}