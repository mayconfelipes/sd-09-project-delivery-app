import { useEffect, useState, useCallback, useMemo } from 'react';
import roundDecimals from '../utils/roundDecimals';
import { getCartData, storeCartData } from '../utils/storage';

const useCart = () => {
  const [cart, setCart] = useState(() => getCartData());

  const setCartProduct = useCallback(
    (product) => setCart(
      (state) => {
        const shouldRemoveProduct = product.quantity === 0;
        const { [product.id]: thisProduct, ...others } = state;
        return shouldRemoveProduct ? others : { ...state, [product.id]: product };
      },
    ),
    [],
  );

  const total = useMemo(() => Object.values(cart).reduce(
    (totalAcc, { quantity, price }) => {
      const balance = quantity * Number(price) + totalAcc;
      return roundDecimals(balance);
    }, 0.00,
  ), [cart]);

  useEffect(
    () => {
      storeCartData(cart);
    },
    [cart],
  );

  return { data: { cart, total }, actions: { setCartProduct } };
};

export default useCart;
