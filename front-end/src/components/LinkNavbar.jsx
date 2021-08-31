import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkNavbar({ text, dataTestId, classStyle, id, to }) {
  return (
    <Link className="navbar-link-none" to={ to }>
      <div
        data-testid={ dataTestId }
        id={ id }
        className={ classStyle }
      >
        { text }
      </div>
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
