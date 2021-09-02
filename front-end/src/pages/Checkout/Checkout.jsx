import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CheckoutItem from '../../components/CheckoutItem';
import connectBack from '../../utills/axiosConfig';


const Checkout = () => {
  const [price, setTotalPrice] = useState(0);
  const [cartItens, setCartItens] = useState([]);
  const [sellers, setSellers] = useState([]);
  const history = useHistory();
  const [sellerInfo, setSellerInfo] = useState({
    name: '',
    address: '',
    addressNumber: '',
  });

  const fetchSellers = async () => {
    try {
      const response = await fetch('http://localhost:3001/sellers');
      const sellersResponse = await response.json();
      console.log(sellersResponse);
      setSellers(sellersResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const postSale =  () => {
    connectBack
    .post('/customer/orders', { email, password })
    .then((response) => {
      console.log('LOGOU', response.data.user);
      saveTokenLocalStorage(response.data.user);
      redirectCostummer();
    })
    .catch((error) => {
      console.log(error);
      setInvalidLogin(true);
  }

  useEffect(() => {
    const getItens = JSON.parse(localStorage.getItem('products'));
    const itensArray = Object.keys(getItens).map((key) => ({
      item: {
        ...getItens[key],
        name: key,
      },
    }));
    setCartItens(itensArray);
    const currPrice = Object.entries(getItens)
      .reduce((acc, curr) => acc + curr[1].totalProduct, 0).toFixed(2);
    setTotalPrice(currPrice);
    fetchSellers();
  }, []);

  const brazilianPrice = () => {
    const minN = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };

  return (
    <div>
      <NavBar />
      <section>
        <h2>Finalizar Pedido</h2>
        <ul>
          {cartItens.map((item, index) => (<CheckoutItem
            key={ index + item.item.name }
            cartItem={ item.item }
            order={ index + 1 }
            cartItens={ cartItens }
            setCartItens={ setCartItens }
          />))}
        </ul>
        <button
          type="button"
          data-testid="customer_checkout__element-order-total-price"
          onClick={ () => history.push('/customer/orders/1') }
        >
          {brazilianPrice()}
        </button>
      </section>
      <h2>Detalhes e Endereço para Entrega</h2>
      <div>
        <label htmlFor="sellers">
          P. Vendedora Responsável
          <select
            value={ sellerInfo.name }
            className="sellers"
            onChange={ ({ target }) => setSellerInfo(
              { ...sellerInfo, name: target.value },
            ) }
          >
            <option value="null">Nome</option>
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.name }>{seller.name}</option>))}
            {/* <option value="fulana">FULANA</option> */}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            className="address"
            value={ sellerInfo.address }
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setSellerInfo(
              { ...sellerInfo, address: target.value },
            ) }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="text"
            className="address-number"
            placeholder="198"
            value={ sellerInfo.addressNumber }
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setSellerInfo(
              { ...sellerInfo, addressNumber: target.value },
            ) }
          />
        </label>
      </div>
      <button data-testid="customer_checkout__button-submit-order" type="submit">
        Finalizar Pedido
      </button>
      <section />
    </div>
  );
};

export default Checkout;
