import React from 'react';

export const createInput = ({
  id, name, type, placeholder, label, testId, onChange, route,
}) => (
  <>
    <label htmlFor={ id }>
      { label }
    </label>
    <input
      data-testid={ `${route}__input-${testId}` }
      id={ id }
      name={ name }
      type={ type }
      placeholder={ placeholder }
      onChange={ onChange }
      autoComplete="off"
      required
    />
  </>
);

export const createButton = ({ name, label, onClick, route, disabled = false }) => (
  <button
    data-testid={ `${route}__button-${name}` }
    name={ name }
    type="button"
    onClick={ onClick }
    disabled={ disabled }
    required
  >
    { label }
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
