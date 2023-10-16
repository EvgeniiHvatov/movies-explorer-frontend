import './MoviesCardList.css';
import React from 'react';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onSaveMovies, savedMovies, isShowMoreButtonActive, handleShowMoreButtonClick, onDeleteMovie }) {
  const { pathname } = useLocation();
  
  return (
    <section className="movies-list">
      <ul className="movies-list__grid">
        {movies.map((movie) => (
          <MoviesCard
          movie={movie}
          id={pathname === "/movies" ? movie.id : movie.movieId}
          key={pathname === "/movies" ? movie.id : movie.movieId}
          onSaveMovies={onSaveMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {isShowMoreButtonActive && (
        <button
          className="movies-list__more-button"
          type="button"
          aria-label="Показать еще"
          onClick={handleShowMoreButtonClick}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
