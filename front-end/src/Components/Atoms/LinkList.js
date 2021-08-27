import React from 'react';
import PropTypes from 'prop-types';
import { ListLinkElement } from '../styles';

function ListLink({ children }) {
  return (
    <ListLinkElement>
      <a href="http://www.w3.org/">{children}</a>
    </ListLinkElement>
  );
}

ListLink.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default ListLink;
