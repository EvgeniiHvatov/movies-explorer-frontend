import './Profile.css';
import { useState, useContext, useEffect, useRef } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { NAME_REG_EXP} from "../../utils/constants.js";

function Profile({ onLogout, handleUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [isSameUserData, setIsSameUserData] = useState(false);
  const nameRef = useRef(false);
  const emailRef = useRef(false);

  const { values, handleChange, isValid, errors } = useFormWithValidation({
    name: nameRef.current.value,
    email: emailRef.current.value
  });

  useEffect(() => {
    setIsSameUserData(nameRef.current.value === currentUser.name && emailRef.current.value === currentUser.email);
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    handleUpdateUser(name, email)
    evt.target.reset()
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <label className="profile__label">
            Имя
            <input
              id="profile__name"
              name="name"
              type="text"
              className="profile__input"
              minLength="2"
              maxLength="30"
              placeholder="Введите имя"
              required
              pattern={NAME_REG_EXP}
              defaultValue={currentUser.name}
              ref={nameRef}
              onChange={handleChange}
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <label className="profile__label">
            E-mail
            <input
              id="profile__email"
              name="email"
              type="email"
              placeholder="Введите email"
              className="profile__input"
              required
              defaultValue={currentUser.email}
              ref={emailRef}
              onChange={handleChange}
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          {!isSameUserData
          ?
            (<button
              className="profile__button profile__button_type_change"
              type="submit"
              disabled={!isValid}
            >Сохранить
            </button>)
          :
            (<button
              className="profile__button profile__button_type_edit"
              type="submit"
              disabled={isSameUserData }
            >Редактировать
            </button>)
          }
          <button
            className={`profile__button profile__button_type_logout ${(!isSameUserData) && "profile__button_hidden"}`}
            type="submit"
            onClick={onLogout}
          >Выйти из аккаунта
          </button>
        </form>
      </section>
    </main>
  );
}

export default Profile;
