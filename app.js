const buttonElement = document.querySelector('#search3');
const inputElement = document.querySelector('#input2');
const movieSearch = document.querySelector('#movieSearch');

const API_KEY = '903a1b7a6f21dea1404b7cec8e1ce3df'

const url = 'https://api.themoviedb.org/3/search/movie?api_key=903a1b7a6f21dea1404b7cec8e1ce3df'

const img_URL = "https://images.tmdb.org/t/p/w500";

function movieSec(movies) {
    return movies.map((movie) => {
        return `
<img src=${img_URL + movie.poster_path} data-movie-id=${movie.id}/>
`;
    })
}

function createContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
    <section class="section">
    ${movieSec(movies)}
    </section>
    <div class="content">
    <p id="content-close">X</p>
    </div>
    `;
    movieElement.innerHTML = movieTemplate
    return movieElement;
}

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            const movieRow = createContainer(movies);
            movieSearch.appendChild(movieRow)
            console.log('Data: ', data)
        })
        .catch(() => {
            console.log('Error: ', error)
        });
    console.log('Value: ', value);
}

