import React from 'react';

const img = require('../../images/logo.png').default;

function Logo() {
  return (
    <div>
      <img src={ img } alt="Logo" style={ { width: '150px' } } />
    </div>
  );
}

export default Logo;
