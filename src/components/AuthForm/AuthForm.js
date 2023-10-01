import '../AuthForm/AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

function AuthForm({link,buttonText,linkName,title,subtitle,linkTo, ...props}) {
  const { pathname } = useLocation();
  
  return (
    <main className="main">
      <section className="auth">
        <Logo />
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form">
        <>{props.children}</>
          <label className="auth__label">
            E-mail
            <input
              name="email"
              type="email"
              className="auth__input"
              placeholder="Введите email"
              minLength="8"
              maxLength="40"
              required
            />
            <span className="auth__input-error"></span>
          </label>
          <label className="auth__label">
            Пароль
            <input
              name="password"
              type="password"
              className="auth__input"
              placeholder="Введите пароль"
              minLength="4"
              maxLength="40"
              required
            />
            <span className="auth__input-error"></span>
          </label>
          <span className={`auth__input-error ${pathname === "/signin" && "auth__input-error_default"}`}>Что-то пошло не так...</span>

          <button
          className={`auth__submit-button ${pathname === "/signin" && "auth__submit-button_reg"}`}
          type="submit"
          >{buttonText}
          </button>
        </form>

        <p className="auth__text">
          {subtitle}
          <Link
            className="auth__link"
            to={link}
          >
            {linkName}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default AuthForm;