const getData = async(url) => {
    try { // Делаем запрос, и ждем его результат (указание await)
        const response = await fetch(url);

        // Парсим в формат JSON
        const data = await response.json();
        console.log(data);

        //ловим ошибку
    } catch (e) {
        console.log(`Что-то пошло не так! ${e}`);
    }
}

getData('https://api.nasa.gov/planetary/apod?api_key=I5KForIu8xDt59Jv4bZds5kVkQFdLArlZoP8aJlK&count=10');