import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({list}) {

  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList list={list} />
    </section>
  );
};

export default Movies;