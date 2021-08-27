import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, styleColor }) {
  const color = {
    primary: {
      backgroundColor: '#EA7C69',
      color: '#FFF',
    },
  };

  const style = {
    ...color[styleColor],
    padding: '14px',
    borderRadius: '8px',
    marginBottom: '14px',
  };

  return (
    <button type="button" style={ style }>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styleColor: PropTypes.string.isRequired,
};

export default Button;
