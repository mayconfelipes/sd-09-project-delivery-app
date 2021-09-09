import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import DropDownList from '../components/DropDownCheckout';
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
    deliveryAddress: '', deliveryNumber: '', sellerId: '',
  });
  const [vendorList, setVendorList] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [idVenda, setIdVenda] = useState();

  const user = JSON.parse(localStorage.getItem('user'));

  const fetchVendorList = async () => {
    const vendors = await api.getAllVendors();
    setVendorList(vendors);
  };

  // const getsSellerFromState = (sellerName) => {
  //   const myVendor = vendorList.find((vendor) => vendor.name === sellerName);
  //   // setInfoSalle({ ...infoSale, sellerId: myVendor.id });
  //   return myVendor.id;
  // };

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
  }, [infoSale, isDisabledButton]);

  const handleChange = ({ target: { name, value } }) => {
    setInfoSalle({ ...infoSale, [name]: value });
  };

  const handleSubmit = async () => {
    // const sellerId = getsSellerFromState(infoSale.sellerName);
    const saleData = { ...infoSale,
      userId: user.id,
      totalCart: totalCart.replace(',', '.') };
    console.log(saleData);
    const result = await api.saveOrder(saleData, cartData, user.token);
    if (result.error) { console.error(`Tratar erro: "${result.error.message}"`); }
    // history.push(`/customer/orders/${result}`); // conferir esse id
    setIdVenda(result);
    setRedirect(true);
  };

  // const getVendorsNames = () => {
  //   const result = vendorList.map((vendor) => (vendor.name));
  //   return result;
  // };

  if (redirect) {
    return (
      <Redirect to={ `/customer/orders/${idVenda}` } />
    );
  }
  return (
    <main>
      <Navbar role={ user.role } />
      <div className="pedido">
        <p className="mt-10 title-table-pedidos">Detalhes e Endereço para Entrega</p>
        <div className="table-pedido">
          <CheckoutTable cartData={ cartData } />
          <section className="total-value">
            <p data-testid={ testIds[28] } className="total-value-p">
              Total: R$
              { totalCart }
            </p>
          </section>
        </div>
        <p className="mt-10 title-table-pedidos">Detalhes e Endereço para Entrega</p>
        <section className="table-pedido-endereco">
          <p className="table-detalhe-title w-1/5">
            {' '}
            P.Vendedora Responsável:
            <DropDownList
              options={ vendorList }
              name="sellerId"
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
            classStyle="w-2/4 m-5"
          />
          <TextInput
            type="input"
            name="deliveryNumber"
            onChange={ handleChange }
            labelText="Número"
            placeholderText="1234"
            dataTestId={ testIds[31] }
            classStyle="w-1/5"
          />
          <LargeButton
            buttonText="FINALIZAR PEDIDO"
            isDisabled={ disableButton }
            onClick={ handleSubmit }
            dataTestId={ testIds[32] }
            classStyle="btn-green w-1/3 m-5"
          />
        </section>
      </div>
    </main>
  );
}
export default Checkout;
