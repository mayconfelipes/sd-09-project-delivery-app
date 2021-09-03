import moment from 'moment';

export const formatPrice = (price) => `${price}`.replace(/\./, ',').toFixed(2);

export const formatDate = (date) => moment(date).format('DD/MM/yyyy');
