import './MoviesCard.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard({movie, onSaveMovies, savedMovies, onDeleteMovie}) {
  const { pathname } = useLocation();
  const [isSaved, setSaved] = useState(false);

  function toggleSave() {
    if (isSaved) {
      deleteMovie(movie);
      console.log("delete movie")
    } else {
      saveMovie(movie);
      console.log("save movie")
    }
  }

  function deleteMovie(movie) {
    pathname === "/movies"
      ? onDeleteMovie(movie.id)
      : onDeleteMovie(movie.movieId);

    setSaved(false);
  }

  function saveMovie(movie) {
    onSaveMovies(movie);
    setSaved(true);
  }

  useEffect(() => {
    setSaved(
      pathname === "/movies"
        ? savedMovies.some((savedMovie) => {
            return savedMovie.movieId === movie.id;
          })
        : true
    );
  }, [movie.id, pathname, savedMovies]);

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="movie">
      <a className="movie__trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="movie__picture"
          src={pathname === "/saved-movies" ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className="movie__header">
        <h2 className="movie__title">{movie.nameRU}</h2>
        {pathname === "/saved-movies"
          ? (<button className="movie__remove" onClick={toggleSave} type="button"/>)
          : (<button  type="button" onClick={toggleSave} className={`movie__like ${isSaved ? "movie__like_active" : ""}`} />)
        }
      </div>
      <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
