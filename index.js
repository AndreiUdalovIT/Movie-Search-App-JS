const input = document.getElementById('input__text');
const btn = document.getElementById('input__btn');
const listMovies = document.getElementById('movies');
const movieInfo = document.getElementById('movie-info');

const baseURL = 'https://www.omdbapi.com/?apikey=76f371c1&';
const search = 's=';
const searchID = 'i=';


const getInputValue = () => {
    const inputValue = input.value;
    return inputValue;
}

const changeInput = () => {
    listMovies.innerHTML = '';
}

const renderList = (element) => {
    const newElementLI = document.createElement('li');
    newElementLI.innerHTML = `<a class="movies__item" href="movie.html?id=${element.imdbID}">
                    <img class="movies__img" src="${element.Poster}" alt="Фото фильма">
                    <h2 class="movies__name">${element.Title}</h2>
                    <p class="movies__year">${element.Year}</p>
                    <p class="movies__category">${element.Type}</p>
                </a>`
    listMovies.appendChild(newElementLI);
}

const getID = (event) => {
    const item = event.target.closest('.movies__item');
    if (!item) {
        return null;
    }
    const id = item.id;
    return id;
}

const clickOnMovie = (event) => {
    const id = getID(event);
    if (!id) return;
    window.location.href = `movie.html?id=${id}`;
}

const clickBtnInput = () => {
    fetch(`${baseURL}${search}${getInputValue()}`)
    .then(data => data.json())
    .then((response) => {
        response.Search.forEach(element => {
            renderList(element);
        });
    })
    input.addEventListener('input', changeInput, { once: true })
}

listMovies.addEventListener('click', clickOnMovie);
btn.addEventListener('click', clickBtnInput);


