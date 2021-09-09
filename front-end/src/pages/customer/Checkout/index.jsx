import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import DescriptionsBar from '../../../components/DescriptionsBar';
import Navbar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import Input from '../../../components/Input';
import GridOrderDetails from '../../../components/GridOrderDetails';
import useGlobalContext from '../../../context/GlobalStateProvider';
import sales from '../../../api/sales';
import { getRegister } from '../../../api/register';
import style from './checkout.module.scss';

const Checkout = () => {
  const { totalPrice, setCartQuantity, cartQuantity } = useGlobalContext();
  const [saleId, setSaleId] = useState(0);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [saleData, setSaleData] = useState({
    address: '',
    addresNumber: '',
  });
  const [sellerName, setSellerName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      const { token } = localItem;
      getRegister('seller', token).then((data) => {
        setSellerName(data);
        setSelectedSeller(data[0].id);
        setIsLoading(false);
      });
    }
  }, []);

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
    const { address, addresNumber } = saleData;
    const { token } = JSON.parse(localStorage.getItem('user'));
    const localItems = JSON.parse(localStorage.getItem('cart'));
    const products = [];
    if (localItems.length) {
      localItems.map(({ quantity, id }) => (
        products.push({ productId: id, quantity })
      ));
    }
    const totPrice = totalPrice.replace(',', '.');
    const priceToNumber = Math.round(parseFloat(totPrice) * 100) / 100;
    const sale = await sales(
      {
        token,
        seller: selectedSeller,
        totalPrice: priceToNumber,
        deliveryNumber: addresNumber,
        deliveryAddress: address,
        products,
      },
    );
    const { id } = sale;
    setSaleId(id);
    setShouldRedirect(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSaleData({ ...saleData, [name]: value });
  };

  if (!isLoading) {
    return (
      <>
        {shouldRedirect && <Redirect to={ `/customer/orders/${saleId}` } />}
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
              name="seller"
              id="orderData"
              data-testid="customer_checkout__select-seller"
              onChange={ ({ target: { value } }) => setSelectedSeller(value) }
            >
              {sellerName.length && sellerName
                .map(({ name, id }) => (
                  <option key={ Math.random() } value={ id }>{ name }</option>
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
            <PrimaryButton
              dataTestId="customer_checkout__button-submit-order"
              onLoginClick={ onClickAddSaleInfo }
            >
              FINALIZAR PEDIDO
            </PrimaryButton>
          </div>
        </form>
      </>
    );
  }
  return (
    <p>Loading...</p>
  );
};

export default Checkout;
