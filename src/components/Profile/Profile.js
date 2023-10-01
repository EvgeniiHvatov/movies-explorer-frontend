import './Profile.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  // временные значения
  const userName = "Виталий";
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${userName}!`}</h1>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input
              id="profile__name"
              name="name"
              type="text"
              className="profile__input"
              minLength="2"
              maxLength="40"
              placeholder="Введите имя"
              required
              value={name || ""}
              onChange={handleChangeName}
            />
            <span className="profile__input-error"></span>
          </label>
          <label className="profile__label">
            E-mail
            <input
              id="profile__email"
              name="email"
              type="email"
              placeholder="Введите email"
              className="profile__input"
              minLength="4"
              maxLength="40"
              required
              value={email || ""}
              onChange={handleChangeEmail}
            />
            <span className="profile__input-error"></span>
          </label>
        </form>

        <button
          className="profile__button profile__button_type_change"
          type="submit"
        >
          Редактировать
        </button>

        <button
          className="profile__button profile__button_type_logout"
          type="submit"
        >
          <Link
            className="profile__button-link"
            to="/"
          >
            Выйти из аккаунта
          </Link>
        </button>
      </section>
    </main>
  );
}

export default Profile;
