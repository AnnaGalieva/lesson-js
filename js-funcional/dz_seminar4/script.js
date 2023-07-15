// Необходимо получить список всех пользователей с помощью бесплатного API(https: //jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage


setData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => { localStorage.setItem('users', JSON.stringify(data)) })
};
getData = () => {
    let data = localStorage.getItem('users');
    data = JSON.parse(data);
    console.log(data);
    console.log(typeof data);
};
removeItem = () => {
        localStorage.removeItem('users');
        console.log(localStorage.key(0));
    }
    //localStorage.clear(); //очистить целиком локальное хранилище





// const loadData = async(url) => {
//     let data = localStorage.getItem(url);


//     if (data) {
//         data = JSON.parse(data);
//     }
//     if (!data) {
//         data = await fetch(url)
//             .then((response) => response.json())
//             .catch((error) => reject(error));
//         localStorage.setItem('users', JSON.stringify(data));
//     }
//     return data;

// }
// loadData('https://jsonplaceholder.typicode.com/users')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));