import '../AuthForm/AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

function AuthForm({onSubmit, isValid, link, buttonText,linkName,title,subtitle,linkTo, ...props}) {
  const { pathname } = useLocation();
  const pageClass = pathname.replace('/', '');

  return (
    <main className="main">
      <section className="auth">
        <Logo />
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" onSubmit={onSubmit}>
        <>{props.children}</>
          <button
            className={`auth__submit-button auth__submit-button_${pageClass} ${!isValid && "auth__submit-button_disabled"}`}
            type="submit"
          >{buttonText}
          </button>
          <p className="auth__text">{subtitle}<Link className="auth__link" to={link}>{linkName}</Link></p>
        </form>
      </section>
    </main>
  );
}

export default AuthForm;