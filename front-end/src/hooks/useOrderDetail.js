import axios from 'axios';

const useOrderDetail = () => {
  const setOrderDetail = async (token, setShoppingCart, id) => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3001/sales/${id}`,
        headers: { Authorization: token },
      });
      setShoppingCart(response.data.products);
    } catch (error) {
      setShoppingCart(error.response);
    }
  };

  return [setOrderDetail];
};

export default useOrderDetail;
