import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  const [isLiked, setLike] = useState(false);

  function handleCardLike() {
    setLike(!isLiked);
  }

  return (
    <li className="movie">
      <img
        className="movie__picture"
        src={props.card.image}
        alt="Фильм"
      />
      <div className="movie__header">
        <h2 className="movie__title">{props.card.nameRU}</h2>
        {location.pathname === "/saved-movies" ?
          <button className="movie__remove" type="button"/>
          :
          <button onClick={handleCardLike} type="button" className={`movie__like ${isLiked ? "movie__like_active" : ""}`}/>
        }
      </div>
      <p className="movie__duration">{getTimeFromMins(props.card.duration)}</p>
    </li>
  );
}

export default MoviesCard;
