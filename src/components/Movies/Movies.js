import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({list}) {

  return (
      <main className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList list={list} />
      </main>
  );
};

export default Movies;