import './Logo.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Logo() {
  return (
    <Link
      to="/"
      className="logo"
    >
      <img
        src={headerLogo}
        alt="Логотип"
        className="logo__img"
      ></img>
    </Link>
  );
}

export default Logo;
