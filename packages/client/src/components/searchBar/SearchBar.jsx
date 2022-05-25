import React from 'react';
import { FilterIcon } from '../icons/FilterIcon';
import { SearchIcon } from '../icons/SearchIcon';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.input}>
        <SearchIcon />
        <input />
      </div>
      <button>
        <FilterIcon />
        <p>Filtre</p>
      </button>
    </div>
  );
};
