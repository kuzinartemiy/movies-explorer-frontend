const MOVIES_API = 'https://api.nomoreparties.co';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _getResponceData(res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: MOVIES_API + movieData.image.url,
        trailer: movieData.trailerLink,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
        thumbnail: MOVIES_API + movieData.image.formats.thumbnail.url,
        movieId: movieData.id,
      }),
    })
    .then(this._getResponceData);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._getResponceData);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._getResponceData);
  }
}

export default new MainApi( {
  baseUrl: 'https://api.kuzindiploma.nomoredomains.club'
})