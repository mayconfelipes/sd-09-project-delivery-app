import React from 'react';
import PropTypes from 'prop-types';
import { TextElement } from '../styles';

function Text({ children, testId }) {
  return (
    <TextElement
      data-testId={ testId }
    >
      {children}
    </TextElement>
  );
}

Text.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Text;
