import './Header.css'
import Logo from '../Logo/Logo';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavBar from '../NavBar/NavBar';

function Header({ loggedIn }) {
  return (
    <Routes>
      <Route
        exact
        path="*"
        element=""
      ></Route>

      <Route
        exact
        path="/"
        element={
          <header className="header header_type_landing">
            <Logo />
            {loggedIn ? (<NavBar loggedIn={loggedIn}/>) : (<Navigation />)}
          </header>
        }
      ></Route>

      <Route
        exact
        path="/movies"
        element={
          <header className="header header_type_movies">
            <Logo />
            {loggedIn ? (<NavBar/>) : (<Navigation />)}
          </header>
        }
      ></Route>
      <Route
        exact
          path="/saved-movies"
          element={
            <header className="header header_type_movies">
              <Logo />
              {loggedIn ? (<NavBar/>) : (<Navigation />)}
            </header>
          }
      ></Route>
      <Route
        exact
        path="/profile"
        element={
          <header className="header header_type_profile">
            <Logo />
            {loggedIn ? (<NavBar/>) : (<Navigation />)}
          </header>
        }
      ></Route>
    </Routes>
  );
}

export default Header;