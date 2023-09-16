import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__main-title">О проекте</h2>

      <ul className="about-project__list">
        <li className="about-project__list-item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>

        <li className="about-project__list-item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about-project__timeline">
        <p className="about-project__line-segment about-project__line-segment_type_short">
          1 неделя
        </p>
        <p className="about-project__line-segment about-project__line-segment_type_long">
          4 недели
        </p>
        <p className="about-project__part">Back-end</p>
        <p className="about-project__part">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;