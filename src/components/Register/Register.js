import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <AuthForm
      link="/signin"
      linkTo="/signin"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      subtitle="Уже зарегистрированы?"
      linkName="Войти"
    >
      <label className="auth__label">
        Имя
        <input
          className="auth__input"
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          required
        />
      </label>
    </AuthForm>
  );
}

export default Register;
