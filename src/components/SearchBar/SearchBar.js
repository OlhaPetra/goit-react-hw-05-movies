import React from 'react';
import { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Enter movie you wish to find!');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        className="searchFormInput"
      />
      <button className="searchFormButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
