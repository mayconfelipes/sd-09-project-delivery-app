export const PRODUCTSBUY_ACTION = 'PRODUCTSBUY_ACTION';

export const productsAction = (productsBuy) => ({
  type: PRODUCTSBUY_ACTION, productsBuy });

export const TOTALPRICE_ACTION = 'TOTALPRICE_ACTION';

export const setTotalPriceAction = (totalPrice) => ({
  type: TOTALPRICE_ACTION, totalPrice });
