/* < div id = "block" >
    <
    p > 1 < /p> <
    p > 2 < /p> <
    /div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www.и вывести его в консоль <
    p class = "www" > text 1 < /p> <
    p class = "www" > text 2 < /p> */
const div1 = document.querySelector('#block');
const firstChild = div1.firstElChild;
//const div1 = document.querySelector('#block p:first-child');

console.log(firstChild);
const div2 = document.querySelectorAll('.www')[0];
const div3 = document.querySelector('.www');
console.log(div1);
console.log(div2);

// Дан тег < a class = "link"
// href = "#" > link text html < /a>
// Вам необходимо поменять текст внутри ссылки на“ link text js”
const linkEl = document.querySelector('.link');
linkEl.textContent = 'link text js';

// Заменить href, на значение https: //developer.mozilla.org/ru/ 
linkEl.href = 'https: //developer.mozilla.org/ru/ ';

//     Дан тег < img class = "photo"src = "" alt = "" >
//     Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://avatarko.ru/kartinka/19261';
// imgEl.onclick = function() {
//     if (imgEl.src === 'j') {
//         imgEl.src = 'k';
//     }
//     else  {
//         imgEl.src = 'j'
//     }
// }


// Дан тег < div class = "content" > < /div> 
// Создайте новый элемент p
// Добавьте в него текст“ Новый текстовый элемент”
// Добавьте созданный элемент внутри < div class = "content" > < /div>
// Удалите добавленный узел
const contentEl = document.querySelector('.content');
const textEl = document.createElement('p');
textEl.textContent = 'Новый текстовый элемент';
//contentEl.appendChild(textEl);
contentEl.append(textEl);
textEl.remove();
// Создать элемент button, добавить в блок < div class = "content" > < /div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
const elementContent_1 = document.querySelector('.content_1');
const newButtonPlus = document.createElement('button');
newButtonPlus.className = 'btn-counter';
newButtonPlus.textContent = 'счетчик кликов +';

const newButtonMinus = document.createElement('button');
newButtonMinus.className = 'btn-counter';
newButtonMinus.textContent = 'счетчик кликов -';

elementContent_1.append(newButtonPlus);
elementContent_1.append(newButtonMinus);

let count_bt = 0;

let countElement = document.createElement('p');
countElement.textContent = count_bt;
elementContent_1.append(countElement);

newButtonPlus.onclick = function() {
    count_bt++;
    countElement.textContent = count_bt;
}

newButtonMinus.onclick = function() {
        count_bt--;
        countElement.textContent = count_bt;
    }
    // Дан тег < div class = "content" > < /div> 
    // Создайте с помощью javascript новый элемент button
    // Добавьте текст для кнопки“ Отправить”
    // При клике на данную кнопку необходимо чтобы текст поменялся на“ Текст отправлен”.создать вторую кнопку,при клике на которую должен появляться p с произвольным текстомю при нажатии на вторую кнопку еще раз,текст должен пропадать

const contentElem = document.querySelector('.content');
const buttonElem = document.createElement('button');
contentElem.appendChild(buttonElem);
console.log(contentElem);
buttonElem.textContent = 'Отправить';
buttonElem.onclick = function() {
    buttonElem.textContent = 'Текст отправлен';
}
const buttonElem2 = document.createElement('button');
contentElem.append(buttonElem2);
buttonElem2.textContent = 'текст появись';
const pEl = document.createElement('p');
let flag = true;
buttonElem2.onclick = function() {
    if (flag) {
        contentElem.appendChild(pEl);
        pEl.textContent = 'lorem';
        flag = false;
    } else {
        pEl.remove();
        flag = true;
    }
}