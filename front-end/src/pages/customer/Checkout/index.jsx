import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DescriptionsBar from '../../../components/DescriptionsBar';
import Navbar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import Input from '../../../components/Input';
import GridOrderDetails from '../../../components/GridOrderDetails';
import { getRegister } from '../../../api/register';
import useGlobalContext from '../../../context/GlobalStateProvider';
import sales from '../../../api/sales';
import style from './checkout.module.scss';

const Checkout = () => {
  const { totalPrice, setCartQuantity, cartQuantity } = useGlobalContext();
  const [sellerName, setSellerName] = useState([]);
  const [saleData, setSaledata] = useState({
    seller: 'Fulana Pereira',
    address: '',
    addresNumber: '',
  });

  const { id: prodId } = 1;

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    getRegister('seller', token).then((data) => setSellerName(data));
  }, []);
  console.log(Object.values(sellerName)[0]);

  const onClickRemoveItem = (itemId) => {
    const one = 1;
    const index = cartQuantity.findIndex((item) => item.id === itemId);
    if (index !== -one) {
      const newItems = [...cartQuantity];
      newItems.splice(index, 1);
      setCartQuantity(newItems);
    }
  };

  const onClickAddSaleInfo = async () => {
    const { seller, address, addresNumber } = saleData;
    const { token } = JSON.parse(localStorage.getItem('user'));
    const localitems = JSON.parse(localStorage.getItem('cart'));
    const products = [];
    localitems.map(({ quantity, id }) => (
      products.push({ productId: id, quantity })
    ));
    const totprice = totalPrice.replace(',', '.');
    await sales(
      {
        token,
        seller,
        totalPrice: parseFloat(totprice),
        deliveryNumber: addresNumber,
        deliveryAddress: address,
        products,
      },
    );
    console.log({
      token,
      seller,
      totalPrice,
      deliveryNumber: addresNumber,
      deliveryAddress: address,
      products,
    });
  };

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setSaledata({ ...saleData, [name]: value });
  }

  return (
    <>
      <Navbar />
      <h1>Finalizar Pedido</h1>
      <div className={ style.totalContainer }>
        <GridOrderDetails shouldRemoveItemApear />
        <div className={ style.barContainer }>
          {JSON.parse(localStorage.getItem('cart'))
          && JSON.parse(localStorage.getItem('cart')).map((
            { id: itemId, description, quantity, price }, index,
          ) => {
            const intPrice = parseFloat(price.replace(',', '.'));
            const multPrice = parseFloat(quantity) * intPrice;
            const totPrice = (Math.round(multPrice * 100) / 100).toFixed(2);
            const toStringNumber = totPrice.toString().replace('.', ',');

            return (<DescriptionsBar
              key={ Math.random() }
              id={ index }
              itemId={ itemId }
              userOrProductName={ description }
              emailOrQuantity={ quantity }
              userTypeOrValue={ price }
              deleteOrPrice={ toStringNumber }
              shouldDeleteApear
              dataTestIdId={
                `customer_checkout__element-order-table-item-number-${index}`
              }
              removeItem={ onClickRemoveItem }
              dataTestIdUserOrProductName={
                `customer_checkout__element-order-table-name-${index}`
              }
              dataTestIdEmailOrQuantity={
                `customer_checkout__element-order-table-quantity-${index}`
              }
              dataTestIdUserTypeOrValue={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
              dataTestIdDeleteOrPrice={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
              dataTestIdRemove={
                `customer_checkout__element-order-table-remove-${index}`
              }
            />);
          })}
        </div>
        <PrimaryButton>
          Total: R$
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {totalPrice}
          </span>
        </PrimaryButton>
      </div>
      <h2>Detalhes e Endereço para a Entrega</h2>

      <form className={ style.formDataContainer }>
        <label htmlFor="orderData">
          P. Vendedora Responsável
          <select
            onChange={ handleInputChange }
            name="seller"
            data-testid="customer_checkout__select-seller"
            id="orderData"
          >
            {Object.values(sellerName)[0] && Object.values(sellerName)[0]
              .map(({ name }) => (
                <option key={ Math.random() } value={ name }>{ name }</option>
              ))}
          </select>
        </label>
        <Input
          inputName="address"
          labelDescription="Endereço"
          dataTestId="customer_checkout__input-address"
          onHandleChange={ handleInputChange }
        />
        <Input
          inputName="addresNumber"
          labelDescription="Número"
          dataTestId="customer_checkout__input-addressNumber"
          onHandleChange={ handleInputChange }
        />
        <div className={ style.checkoutButton }>
          <Link to={ `/customer/orders/${prodId}` }>
            <PrimaryButton
              dataTestId="customer_checkout__button-submit-order"
              onLoginClick={ onClickAddSaleInfo }
            >
              FINALIZAR PEDIDO
            </PrimaryButton>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Checkout;
