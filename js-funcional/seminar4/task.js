//localstorage
//добавление в локалсторадж
localStorage.setItem('name', 'Alex');
localStorage.setItem('pas', '1234');
localStorage.setItem('login', true);

//удаление из локалсторадж
localStorage.removeItem('pass');

console.log(localStorage.key(0));

const data = localStorage.getItem('login');
console.log(data); //true
//localStorage.user = { name: 'Bob' };
// console.log(localStorage.user);
localStorage.user = JSON.stringify({ name: 'Bob' });
const user = JSON.parse(localStorage.user);
console.log(user);

localStorage.clear(); //очистить целиком локальное хранилище
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
}