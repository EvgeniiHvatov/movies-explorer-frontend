import './SearchForm.css';
import { useState, useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function SearchForm({ keyword, handleSearch, toggleCheckbox, isCheckboxOn }) {
  const { values, handleChange, setValues } = useFormWithValidation({});
  const [isInputEmpty, setInputEmpty] = useState(false);

  useEffect(() => {
    setValues({ keyword: keyword });
  }, [keyword, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(values.keyword);
    if (values.keyword === "") {
      setInputEmpty(true);
    } else {
      setInputEmpty(false);
    }
  }

  useEffect(() => {
    handleSearch(values.keyword);
  }, [isCheckboxOn]);

  return (
    <section className='search-form'>
      <form className="search" onSubmit={handleSubmit} noValidate>
        <div className="search__container">
          <input className="search__input"
            placeholder="Фильм"
            name='keyword'
            type="text"
            value={values.keyword || ""}
            onChange={handleChange}
            required
          />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <span className={`search__empty-search-error ${
            isInputEmpty && "search__empty-search-error_visible"
          }`}>
          Нужно ввести ключевое слово
        </span>
        <div className="search__filter">
        <label className="search__switch">
          <input className="search__checkbox" 
            type="checkbox"
            checked={isCheckboxOn}
            onChange={toggleCheckbox}
          />
          <span className="search__slider"></span>
        </label>
          <p className="search__switch-label">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
