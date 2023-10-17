import './SavedMovies.css';
import { useState, useEffect } from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORT_MOVIE_DURATION } from "../../utils/constants.js";

function SavedMovies({ savedMovies,  onDeleteMovie }) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isCheckboxOn, setCheckboxOn] = useState(false);

  useEffect(() => {
    setFoundMovies(savedMovies);
  }, []);

  function handleSearch(value) {
    if (value) {
      const filteredMovies = savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(value.toLowerCase())
      );
      localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
      if (filteredMovies.length !== 0) {
        setSearchError("");
        setFoundMovies(filteredMovies);
      } else {
        setSearchError("Ничего не найдено");
        setFoundMovies([]);
      }
      checkIfShortMovie(filteredMovies);

      isCheckboxOn
        ? setFoundMovies(
            JSON.parse(localStorage.getItem("foundSavedShortMovies"))
          )
        : setFoundMovies(JSON.parse(localStorage.getItem("savedMovies")));
    } else {
      isCheckboxOn
        ? setFoundMovies(
          savedMovies.filter((movie) => {
              return movie.duration <= SHORT_MOVIE_DURATION;
            })
          )
        : setFoundMovies(savedMovies);
    }
  }

  function checkIfShortMovie(filteredMovies) {
    if (isCheckboxOn) {
      const filteredShortMovies = filteredMovies.filter((movie) => {
        return movie.duration <= SHORT_MOVIE_DURATION;
      });
      localStorage.setItem("foundSavedShortMovies",JSON.stringify(filteredShortMovies));
      return filteredShortMovies;
    } else {
      return;
    }
  }

  function toggleCheckbox() {
    setCheckboxOn(!isCheckboxOn);
  }

  function onRemoveLike(id) {
    onDeleteMovie(id);
    setFoundMovies(foundMovies.filter((movie) => movie.movieId !== id));
  }

  return (
    <main className="saved-movies">
      <SearchForm
        toggleCheckbox={toggleCheckbox}
        handleSearch={handleSearch}
        isCheckboxOn={isCheckboxOn}
      />
      {!searchError && (
        <MoviesCardList
          movies={foundMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onRemoveLike}
        />
      )}
      {searchError && <p className="saved-movies__error-message">{searchError}</p>}
    </main>
  );
};

export default SavedMovies;
