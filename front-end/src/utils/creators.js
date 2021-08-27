import React from 'react';

export const createInput = (name, type, onChange, route) => (
  <input
    data-testid={ `${route}__input-${type}` }
    name={ name }
    type={ type }
    placeholder={ name }
    onChange={ onChange }
    required
  />
);

export const createButton = (name, text, onClick, route) => (
  <button
    data-testid={ `${route}__button-${name}` }
    name={ name }
    type="button"
    onClick={ onClick }
    required
  >
    { text }
  </button>
);

export const createDropDown = (name, options, onChange, route) => (
  <select
    data-testid={ `${route}__select-${name}` }
    id={ name }
    name={ name }
    onChange={ onChange }
  >
    { options.map((el) => (
      <option key={ el } value={ el }>{ el }</option>)) }
  </select>
);
