import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default function Header({
  onChangeFilter,
  filter,
  countryCount,
  totalPopulation,
}) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div className={css.flexRow}>
      <input
        placeholder="Digite o país"
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
      |
      <span className={css.infoCountries}>
        Países: <strong>{countryCount}</strong>
      </span>
      |
      <span className={css.infoPopulation}>
        População:<strong> {formatNumber(totalPopulation)}</strong>
      </span>
    </div>
  );
}
