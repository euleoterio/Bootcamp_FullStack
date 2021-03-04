import React from 'react';
import css from './countries.module.css';
import Country from './Country';

export default function Countries({ countries }) {
  return (
    <div className={`${css.border} ${css.flexRow}`}>
      {countries.map((country) => {
        return <Country key={country.id} country={country} />;
      })}
    </div>
  );
}
