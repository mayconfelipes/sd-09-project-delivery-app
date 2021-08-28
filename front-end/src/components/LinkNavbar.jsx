import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkNavbar({ text, dataTestId, classStyle, id, to }) {
  return (
    <Link to={ to } className={ classStyle }>
      <span
        data-testid={ dataTestId }
        id={ id }
      >
        { text }
      </span>
    </Link>
  );
}

LinkNavbar.propTypes = {
  text: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  classStyle: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
};

LinkNavbar.defaultProps = {
  dataTestId: '',
  classStyle: '',
  id: '',
  to: '',
};

export default LinkNavbar;
