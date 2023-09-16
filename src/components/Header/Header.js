import { Routes, Route } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <header className="header header_type_landing">
            <Logo />
            <Navigation />
          </header>
        }
      ></Route>
    </Routes>
  );
}

export default Header;