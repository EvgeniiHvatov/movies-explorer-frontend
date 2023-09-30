import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { movies } from '../../utils/MoviesTest';

function App({loggedIn}) {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" loggedIn={loggedIn} element={<Main />} />
          <Route path="/movies" loggedIn={loggedIn} element={<Movies list={movies}/>}/>
          <Route path="/saved-movies" loggedIn={loggedIn} element={<SavedMovies list={movies}/>} />
          <Route path="/profile" loggedIn={loggedIn} element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        </div>
    </div>
  );
}

export default App;
