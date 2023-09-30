import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm
    link="/signup"
    linkTo="/movies"
    title="Рады видеть!"
    buttonText="Войти"
    subtitle="Ещё не зарегистрированы?"
    linkName="Регистрация"
    ></AuthForm>
  );
}

export default Login;