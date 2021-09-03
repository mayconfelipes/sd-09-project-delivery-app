import React from 'react';
import PropTypes from 'prop-types';
import { ListLinkElement } from '../styles';

function ListLink({ text, url }) {
  return (
    <ListLinkElement>
      <a href={ url }>{text}</a>
    </ListLinkElement>
  );
}

ListLink.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default ListLink;
