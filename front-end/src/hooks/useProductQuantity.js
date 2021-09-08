import { useRef, useState, useEffect, useCallback } from 'react';
import { useCustomRoleActionContext } from '../context/contexts';

const useProductQuantity = (product) => {
  const loaded = useRef();
  const [quantity, setQuantity] = useState(() => 0);
  const { setCartProduct } = useCustomRoleActionContext();

  const increaseQuantity = useCallback(
    () => setQuantity((current) => current + 1),
    [],
  );

  const decreaseQuantity = useCallback(
    () => setQuantity((current) => (current === 0 ? 0 : current - 1)),
    [],
  );

  const editQuantity = useCallback(
    (newQuantity) => setQuantity(newQuantity < 0 ? 0 : newQuantity),
    [],
  );

  useEffect(
    () => {
      if (loaded.current) {
        setCartProduct({ ...product, quantity });
      }
      loaded.current = true;
    },
    [quantity],
  );

  return { quantity, increaseQuantity, decreaseQuantity, editQuantity };
};

export default useProductQuantity;
