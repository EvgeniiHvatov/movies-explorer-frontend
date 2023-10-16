import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
    resetForm();
  }

  return (
    <AuthForm
      link="/signin"
      linkTo="/signin"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      subtitle="Уже зарегистрированы?"
      linkName="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
     <label className="auth__label">
        Имя
        <input
          className={`auth__input ${errors.name && "auth-form__input_error"}`}
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className={`auth__input-error ${errors.name ? "auth__input-error_show" : "" }`}>{errors.name}</span>
      </label>
      <label className="auth__label">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input"
          placeholder="Введите email"
          value={values.email || ""}
          onChange={handleChange}
          required
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
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className={`auth__input-error ${errors.password ? "auth__input-error_show" : "" }`}>{errors.password}</span>
      </label>
    </AuthForm>
  );
}

export default Register;
