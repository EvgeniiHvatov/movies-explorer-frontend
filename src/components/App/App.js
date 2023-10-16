import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate, } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';

function App() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([MainApi.getUserInfo(), MainApi.getMovies(), MoviesApi.getAllMovies()])
        .then(([userInfo, savedMovies, allMovies]) => {
          setCurrentUser(userInfo);
          localStorage.setItem('allMovies', JSON.stringify(allMovies))
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setSavedMovies(savedMovies)
        })
        .catch((err) => {
          console.log(`Не удалось получить данные пользователя, массив всех фильмов и список сохраненных фильмов. Ошибка: ${err}`);
          alert('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    if(localStorage.getItem('jwt')){
    MainApi
      .checkToken(localStorage.getItem('jwt'))
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          console.log('Токен проверен. Все в порядке');
        }
      })
      .catch((err) => {
        console.log("Что-то не так с токеном. Убедитесь, что вы авторизованы. Ошибка:", err);
        onLogout();
      });
    }
  }, [navigate]);

  function getUserInfo() {
    MainApi
      .getUserInfo()
      .then(data => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.log(`Не удалось получить данные пользователя. Ошибка сервера: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onRegister(data) {
    MainApi
      .registerUser(data)
      .then (res => {
        if (res) {
          onLogin({
            email: data.email,
            password: data.password,
          });
          console.log(`Регистрация прошла успешно!`);
        }
      })
      .catch(err => {
        if (409) {
          alert('Пользователь с таким email уже зарегистрирован');
        } else {
          alert(`Ошибка регистрации: ${err}`);
        }
      });
  };

  function onLogin(data) {
    MainApi
      .loginUser(data)
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('jwt', token);
          MainApi.updateToken();
          setIsLoggedIn(true);
          getUserInfo();
          alert(`Вы успешно вошли в систему!`);
          navigate('/movies');
        }
      })
      .catch(err => {
        if (400) {
          alert('Указан неверный email или пароль.');
        } else {
          alert(`Ошибка авторизации: ${err}`);
        }
      });
  };

  function onLogout() {
    localStorage.removeItem('jwt')
    setIsLoggedIn(false);
    setCurrentUser({ email: '', name: '' });
    localStorage.clear();
  };

  function onSaveMovies(data) {
    MainApi
      .addMovies(data)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
        console.log("прошло сохранение");
      })
      .catch((err) => {
        console.log(`При добавлении фильма что-то пошло не так. Ошибка: ${err}`);
      });
  }

  function onDeleteMovie(movieId) {
    MainApi
      .deleteMovies(movieId)
      .then((res) => {
        setSavedMovies((state) =>
          state.filter((m) => m.id || m.movieId !== movieId)
        );
      })
      .catch((err) => {
        console.log(`При удалении фильма что-то пошло не так. Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(name, email) {
    MainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(`При редактировании профиля что-то пошло не так. Ошибка: ${err}`);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <div className="app__container">
        {pathname === "/signin" || pathname === "/signup" ? "" : <Header loggedIn={loggedIn} />}
       
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute component={Movies} loggedIn={loggedIn} isLoading={isLoading} savedMovies={savedMovies} onSaveMovies={onSaveMovies} onDeleteMovie={onDeleteMovie}/>}/>
          <Route path="/saved-movies" element={<ProtectedRoute component={SavedMovies} loggedIn={loggedIn} isLoading={isLoading} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie}/>}/>
          <Route path="/profile" element={<ProtectedRoute component={Profile} handleUpdateUser={handleUpdateUser} loggedIn={loggedIn} isLoading={isLoading} onLogout={onLogout}/>}/>
          <Route path="/signin" element={loggedIn ? <Navigate to="/movies" /> : <Login onLogin={onLogin}/>}/>
          <Route path="/signup" element={loggedIn ? <Navigate to="/movies" /> : <Register onRegister={onRegister}/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {pathname === "/profile" || pathname === "/signin" || pathname === "/signup" ? "" : <Footer />}
        </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
