import './Movies.css';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {
  SHORT_MOVIE_DURATION,
  MOVIES_TO_RENDER_L,
  MOVIES_TO_RENDER_C,
  MOVIES_TO_RENDER_M,
  MOVIES_TO_RENDER_S,
  MOVIES_TO_ADD_L,
  MOVIES_TO_ADD_C,
  MOVIES_TO_ADD_M,
  MOVIES_TO_ADD_S,
  WINDOW_WIDTH_CUTOFF_L,
  WINDOW_WIDTH_CUTOFF_C,
  WINDOW_WIDTH_CUTOFF_M,
  WINDOW_WIDTH_CUTOFF_S
} from "../../utils/constants.js";

function Movies({ savedMovies, onSaveMovies, onDeleteMovie, loggedIn }) {
  const { pathname } = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchError, setSearchError] = useState("");
  const [isCheckboxOn, setCheckboxOn] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [renderedMovies, setRenderedMovies] = useState(foundMovies);
  const [isShowMoreButtonActive, setShowMoreButtonActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("keyword")) {
      setKeyword(localStorage.getItem("keyword"));
    }
    if (localStorage.getItem("isCheckboxOn") === "true") {
      setCheckboxOn(true);
      setFoundMovies(JSON.parse(localStorage.getItem("foundShortMovies")));
    }
    if (localStorage.getItem("isCheckboxOn") === "false") {
      setCheckboxOn(false);
      setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }, [pathname === "/movies"]);

  function handleSearch(value) {
    const serverMovies = JSON.parse(localStorage.getItem("allMovies"));

    if (value) {
      setKeyword(value);
      localStorage.setItem("keyword", value);

      const filteredMovies = serverMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(value.toLowerCase())
      );
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
      
      if (filteredMovies.length !== 0) {
        setSearchError("");
        setFoundMovies(filteredMovies);
      } else {
        setSearchError("Ничего не найдено");
        setFoundMovies([]);
      }
      checkIfShortMovie(filteredMovies);

      isCheckboxOn
        ? setFoundMovies(JSON.parse(localStorage.getItem("foundShortMovies")))
        : setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }

  function checkIfShortMovie(filteredMovies) {
    if (isCheckboxOn) {
      localStorage.setItem("isCheckboxOn", "true");
      const filteredShortMovies = filteredMovies.filter((movie) => {
        return movie.duration <= SHORT_MOVIE_DURATION;
      });
      localStorage.setItem("foundShortMovies", JSON.stringify(filteredShortMovies));
      return filteredShortMovies;
    } else {
      localStorage.setItem("isCheckboxOn", "false");
      return;
    }
  }

  function toggleCheckbox() {
    setCheckboxOn(!isCheckboxOn);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const updateMedia = () => {
    setTimeout(() => {
      setCurrentWidth(window.innerWidth);
    }, 4000);
  };

  function countRenderedMovies(foundMovies) {
    if (currentWidth > WINDOW_WIDTH_CUTOFF_L) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_L));
    } else if (currentWidth > WINDOW_WIDTH_CUTOFF_C) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_C));
    } else if (currentWidth > WINDOW_WIDTH_CUTOFF_M) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_M));
    } else if (currentWidth > WINDOW_WIDTH_CUTOFF_S) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_S));
    }
  }

  useEffect(() => {
    if (renderedMovies.length < foundMovies.length) {
      setShowMoreButtonActive(true);
    } else {
      setShowMoreButtonActive(false);
    }
  }, [renderedMovies.length, foundMovies.length]);

  useEffect(() => {
    countRenderedMovies(foundMovies);
  }, [currentWidth, foundMovies]);

  function handleShowMoreButtonClick() {
    if (
      renderedMovies.length < foundMovies.length &&
      currentWidth > WINDOW_WIDTH_CUTOFF_L
    ) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_L)
      );
    } else if (
      renderedMovies.length < foundMovies.length &&
      currentWidth > WINDOW_WIDTH_CUTOFF_C
    ) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_C)
      );
    } else if (
      renderedMovies.length < foundMovies.length &&
      currentWidth > WINDOW_WIDTH_CUTOFF_M
    ) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_M)
      );
    } else if (
      renderedMovies.length < foundMovies.length &&
      currentWidth > WINDOW_WIDTH_CUTOFF_S
    ) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_S)
      );
    }
  }

  return (
    <main className="movies">
      <SearchForm 
        keyword={keyword}
        handleSearch={handleSearch}
        toggleCheckbox={toggleCheckbox}
        isCheckboxOn={isCheckboxOn}
      />
      {!searchError && (
        <MoviesCardList 
          movies={renderedMovies}
          onSaveMovies={onSaveMovies}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
          isShowMoreButtonActive={isShowMoreButtonActive}
          handleShowMoreButtonClick={handleShowMoreButtonClick}
        />
      )}
      {searchError && <p className="movies__error-message">{searchError}</p>}
    </main>
  );
};

export default Movies;