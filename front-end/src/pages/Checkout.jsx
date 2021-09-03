import React, { useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import DropDownList from '../components/DropDownList';
import api from '../services/api';
import AppContext from '../context/AppContext';
import testIds from '../utils/dataTestIds';
import { getCarrinhoLocalStorage } from '../utils/storage';

function Checkout() {
  const { totalCart } = useContext(AppContext);
  // const history = useHistory();
  const [disableButton, setDisableButton] = useState(true);
  const cartData = getCarrinhoLocalStorage();
  const [infoSale, setInfoSalle] = useState({
    deliveryAddress: '', deliveryNumber: '', sellerName: '',
  });
  const [vendorList, setVendorList] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchVendorList = async () => {
    const vendors = await api.getAllVendors();
    setVendorList(vendors);
  };

  const getsSellerFromState = (sellerName) => {
    const myVendor = vendorList.find((vendor) => vendor.name === sellerName);
    // setInfoSalle({ ...infoSale, sellerId: myVendor.id });
    return myVendor.id;
  };

  const isDisabledButton = () => {
    const { deliveryAddress, sellerName, deliveryNumber } = infoSale;

    if (deliveryAddress === '' || sellerName === '' || deliveryNumber === '') {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    isDisabledButton();
    fetchVendorList();
  }, [infoSale]);

  const handleChange = ({ target: { name, value } }) => {
    setInfoSalle({ ...infoSale, [name]: value });
  };

  const handleSubmit = async () => {
    const sellerId = getsSellerFromState(infoSale.sellerName);
    const saleData = { ...infoSale,
      sellerId,
      userId: user.id,
      totalCart: totalCart.replace(',', '.') };
    console.log(saleData);
    console.log(cartData);
    const result = await api.saveOrder(saleData, cartData);
    console.log(result);
    if (result.error) { console.error(`Tratar erro: "${result.error.message}"`); }
    // history.push(`/customer/orders/${result.id}`); // conferir esse id
  };

  const getVendorsNames = () => {
    const result = vendorList.map((vendor) => (vendor.name));
    return result;
  };
  return (
    <main>
      <Navbar role={ user.role } />
      <CheckoutTable cartData={ cartData } />
      <section>
        <p data-TestId={ testIds[28] }>
          Total: R$
          { totalCart }
        </p>
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <p>
          {' '}
          P.Vendedora Responsável:
          <DropDownList
            options={ getVendorsNames() }
            name="sellerName"
            dataTestId={ testIds[29] }
            onChange={ handleChange }
          />
        </p>
        <TextInput
          type="input"
          name="deliveryAddress"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          dataTestId={ testIds[30] }
        />
        <TextInput
          type="input"
          name="deliveryNumber"
          onChange={ handleChange }
          labelText="Número"
          placeholderText="1234"
          dataTestId={ testIds[31] }
        />
        <LargeButton
          buttonText="FINALIZAR PEDIDO"
          isDisabled={ disableButton }
          onClick={ handleSubmit }
          dataTestId={ testIds[32] }
        />
      </section>
    </main>
  );
}
export default Checkout;
