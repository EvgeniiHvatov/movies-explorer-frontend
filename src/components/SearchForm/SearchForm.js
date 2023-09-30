import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className="search">
        <div className="search__container">
          <input className="search__input" placeholder="Фильм" type="text" required />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <div className="search__filter">
        <label className="search__switch">
          <input className="search__checkbox"type="checkbox" />
          <span className="search__slider"></span>
        </label>
          <p className="search__switch-label">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
