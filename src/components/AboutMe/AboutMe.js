import './AboutMe.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me main__about-me">
      <h2 className="about-me__title">Студент</h2>

      <div className="about-me-info">
        <div className="about-me-info__text">
          <h3 className="about-me-info__title">Евгений</h3>
          <p className="about-me-info__subtitle">
            Фронтенд-разработчик, 31 год
          </p>
          <p className="about-me-info__description">
            Я родился и живу в Санкт-Петербурге, закончил Санкт-Петербургский политехнический университет.
            Работаю бухгалтером. В последующие годы планирую развиваться в информационных технологиях, в том числе разработкой интернет сайтов.
            Веб разработкой заинтересовался 10 месяцев назад.
          </p>
          <NavLink
            className="about-me-info__link"
            to='https://github.com/EvgeniiHvatov'
            target="_blank"
            rel="noreferrer"
          >
            Github
          </NavLink>
        </div>
        <img
            className="about-me-info__photo"
            src={avatar}
            alt="Фото разработчика"
        />
      </div>
    </section>
  );
}

export default AboutMe;
