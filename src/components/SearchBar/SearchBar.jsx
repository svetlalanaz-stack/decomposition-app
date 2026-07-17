import React from 'react';
import './SearchBar.css';

function SearchBar({ placeholder = 'Поиск...', onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (onSearch) onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className="search-bar__input"
        placeholder={placeholder}
      />
      <button type="submit" className="search-bar__button">
        🔍 Найти
      </button>
    </form>
  );
}

export default SearchBar;