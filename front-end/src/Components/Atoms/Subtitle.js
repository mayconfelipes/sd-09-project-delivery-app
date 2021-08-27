import React from 'react';
import PropTypes from 'prop-types';
import { SubtitleElement } from '../styles';

function Subtitle({ children }) {
  return <SubtitleElement>{children}</SubtitleElement>;
}

Subtitle.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Subtitle;
