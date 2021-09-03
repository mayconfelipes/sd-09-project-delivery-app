import moment from 'moment';

export const formatPrice = (price) => (typeof price === 'number'
  ? `${price.toFixed(2)}`.replace(/\./, ',')
  : `${price}`.replace(/\./, ','));

export const formatDate = (date) => moment(date).format('DD/MM/yyyy');
