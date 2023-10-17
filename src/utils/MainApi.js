class MainApi {
  constructor({baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
    return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  registerUser({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkRes);
  }

  loginUser({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkRes);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkRes).then((res) => res);
  }

  updateUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._checkRes);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkRes);
  }

  addMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._checkRes);
  }

  deleteMovies(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes);
  }


  updateToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.filmspb.nomoredomainsicu.ru',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;