import React from 'react';
import PropTypes from 'prop-types';

const spanStyle = {
  color: '#FFF',
  padding: '8px',
};

function LabelTitle(props) {
  const { name } = props;
  return (
    <span style={ spanStyle }>{name}</span>
  );
}

LabelTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LabelTitle;
