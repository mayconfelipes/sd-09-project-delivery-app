import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorH3 = styled.h3`
  color: red;
`;

function ErrorMessage({ route, field }) {
  return (
    <ErrorH3
      data-testid={ `${route}__element-invalid${field}` }
    >
      Os valores informados estão incorretos.
    </ErrorH3>
  );
}

ErrorMessage.propTypes = {
  route: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default ErrorMessage;
