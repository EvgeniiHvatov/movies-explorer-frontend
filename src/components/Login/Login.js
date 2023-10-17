import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import {useState} from "react";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
  useFormWithValidation({});
  const [isFetching, setIsFetching] = useState(false);

function handleSubmit(evt) {
  if(isFetching) {
    return;
  }
  evt.preventDefault();
  setIsFetching(true);

  onLogin(values).then(status => {
    if(status) {
      resetForm();
    }
  }).finally(() => {
    setIsFetching(false);
  })
}

  return (
    <AuthForm
    link="/signup"
    linkTo="/movies"
    title="Рады видеть!"
    buttonText="Войти"
    subtitle="Ещё не зарегистрированы?"
    linkName="Регистрация"
    onSubmit={handleSubmit}
    isValid={isValid}
    disabled={isFetching}
    >
      <label className="auth__label">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input"
          placeholder="Введите email"
          onChange={handleChange}
          value={values.email || ""}
          required
          disabled={isFetching}
        />
        <span className={`auth__input-error ${errors.email ? "auth__input-error_show" : "" }`}>{errors.email}</span>
      </label>
      <label className="auth__label">
        Пароль
        <input
          name="password"
          type="password"
          className="auth__input"
          placeholder="Введите пароль"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.password || ""}
          disabled={isFetching}
          required
        />
        <span className={`auth__input-error ${errors.password ? "auth__input-error_show" : "" }`}>{errors.password}</span>
      </label>
    </AuthForm>
  );
}

export default Login;
