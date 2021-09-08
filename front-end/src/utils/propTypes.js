import PropTypes from 'prop-types';

const productShape = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.string,
};

export const productCounterPropTypes = {
  className: PropTypes.string.isRequired,
  product: PropTypes.shape(productShape).isRequired,
};

export const productCardPropTypes = {
  className: PropTypes.string.isRequired,
  product: PropTypes.shape(productShape).isRequired,
};

export const productNamePropTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export const productsArrayPropTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
};

export const onlyClassNamePropTypes = {
  className: PropTypes.string.isRequired,
};
