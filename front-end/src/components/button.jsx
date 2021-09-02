import React, { useContext /* useEffect, useState */ } from 'react';
import PropTypes from 'prop-types';
import '../styles/buttons.css';
import Context from '../context/Context';

const Button = ({ name, ...rest }) => {
  useContext(Context);
  // const { products } = useContext(Context);
  /* const [total, setTotal] = useState(0);
   useEffect(() => {
    setTotal(products.reducer((acc, cur) => cur.quantity * cur.price));
  }, [products]); */

  return (
    <button type="button" { ...rest }>
      {name}

    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
