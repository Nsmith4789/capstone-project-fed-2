const buttonElement = document.querySelector('#search3');
const inputElement = document.querySelector('#input2');

const API_KEY = '903a1b7a6f21dea1404b7cec8e1ce3df'

const url = 'https://api.themoviedb.org/3/search/movie?api_key=903a1b7a6f21dea1404b7cec8e1ce3df'

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data: ', data)
        })
        .catch(() => {
            console.log('Error: ', error)
        });
    console.log('Value: ', value);
}

