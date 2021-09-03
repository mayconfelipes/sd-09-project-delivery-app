import moment from 'moment';

export const formatPrice = (price) => `${price.toFixed(2)}`.replace(/\./, ',');

export const formatDate = (date) => moment(date).format('DD/MM/yyyy');
