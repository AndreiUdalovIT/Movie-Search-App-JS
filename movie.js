const movieInfo = document.getElementById('movie-info');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const baseURL = 'https://www.omdbapi.com/?apikey=76f371c1&';
const searchID = 'i=';

const renderInfo = (response) => {
    const newElementDIV = document.createElement('div');
    newElementDIV.innerHTML = `<div class="id-movie__flex">
                <div class="id-movie__left">
                    <img class="id-movie__left__img" src="${response.Poster}" alt="Фото фильма">
                </div>
                <div class="id-movie__right">
                    <h2 class="id-movie__right__name">${response.Title}</h2>
                    <ul class="id-movie__right__flex">
                        <li class="text-parameter">Год:<span class="text-info">    ${response.Year}</span></li>
                        <li class="text-parameter">Рейтинг:<span class="text-info">    ${response.Rated}</span></li>
                        <li class="text-parameter">Дата выхода:<span class="text-info">    ${response.Released}</span></li>
                        <li class="text-parameter">Продолжительность:<span class="text-info">    ${response.Runtime}</span></li>
                        <li class="text-parameter">Жанр:<span class="text-info">    ${response.Genre}</span></li>
                        <li class="text-parameter">Режиссер:<span class="text-info">    ${response.Director}</span></li>
                        <li class="text-parameter">Сценарий:<span class="text-info">    ${response.Writer}</span></li>
                        <li class="text-parameter">Актеры:<span class="text-info">    ${response.Actors}</span></li>
                        <li class="text-parameter">Страна:<span class="text-info">    ${response.Country}</span></li>
                    </ul>
                </div>
            </div>
            <p class="text-about">${response.Plot}</p>`
    movieInfo.appendChild(newElementDIV);
}

const getInfoAndRender = () => {
    fetch(`${baseURL}${searchID}${id}`)
    .then(data => data.json())
    .then(response => renderInfo(response)) 
}

getInfoAndRender();