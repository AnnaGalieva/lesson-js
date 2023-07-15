const myPromise = new Promise((resolve, reject) => {
    //выполняется асинхронные действия
});
console.log(myPromise);
myPromise
    .then((value) => {
        //действие в случае выполнени промиса
    })
    .catch((error) => {
        //действие в случае отклонения промиса
    })


//реальный пример(https://jsonplaceholder.typicode.com/)
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message));

//упрощение заготовка
const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error))
    });
getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

//миграция на async awayt
const getData2 = async(url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const data = await getData2('https://rickandmortyapi.com/api/character');
    console.log(data);
} catch (error) {
    console.log(error.message);
}