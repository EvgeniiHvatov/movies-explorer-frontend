import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({list}) {
  const moviesFilter = list.filter((item) => !item.owner);

  return (
    <section className="saved-movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList
      list={moviesFilter}
      savedmovies={true}
      />
    </section>
  );
};

export default SavedMovies;
