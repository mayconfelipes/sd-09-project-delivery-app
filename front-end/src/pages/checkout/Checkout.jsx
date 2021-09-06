import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartItems from '../../components/cartItems/CartItems';
import NavBar from '../../components/navBar/NavBar';
import { createNewSale, createSalesProducts } from '../../services/salesAPI';
import getUsers from '../../services/usersAPI';

export default function Checkout() {
  const [currentCart, setCurrentCart] = useState([]);
  const [currentTotalPrice, setCurrentTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [currentIdSellerDropDown, setCurrentIdSellerDropDown] = useState(0);
  const [currentAddress, setCurrentAddress] = useState('');
  const [currentNumberAddress, setCurrentNumberAddress] = useState('');

  const history = useHistory();

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('productsAdded'));
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    const getAllSellers = async () => {
      const users = await getUsers('seller');
      setSellers(users);
      setCurrentIdSellerDropDown(users[0].id);
    };
    getAllSellers();
    setCurrentCart(cartLocalStorage);
    setCurrentTotalPrice(totalPrice);
  }, []);

  console.log(currentIdSellerDropDown);

  const checkout = async (
    e,
    currentAddressInput = currentAddress,
    currentNumberAddressInput = currentNumberAddress,
  ) => {
    e.preventDefault();
    const userLocalStorageInfos = JSON.parse(localStorage.getItem('user'));
    const cartLocalStorage = JSON.parse(localStorage.getItem('productsAdded'));

    const allUserInfosBackend = await getUsers(`${userLocalStorageInfos.role}`);

    const userThatBoughtInfos = allUserInfosBackend.filter(
      (user) => user.name === userLocalStorageInfos.name,
    );

    const objectToSaveNewSale = {
      sellerId: currentIdSellerDropDown,
      userId: userThatBoughtInfos[0].id,
      totalPrice: currentTotalPrice,
      deliveryNumber: currentNumberAddressInput,
      deliveryAddress: currentAddressInput,
    };

    const newSale = await createNewSale(objectToSaveNewSale);

    cartLocalStorage.forEach(async (item) => {
      const objectToCreateSalesProducts = {
        productId: item.id,
        saleId: newSale.id,
        quantity: item.quantity,
      };
      await createSalesProducts(objectToCreateSalesProducts);
    });
    history.push(`/customer/orders/${newSale.id}`);
  };

  return (
    <div>
      <NavBar />
      <div style={ { width: '80%', margin: 'auto' } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <div>item</div>
          <div>descrição</div>
          <div>
            <span>Quantidade</span>
            <span>Valor unitário</span>
            <span>Sub-total</span>
            <span>Remover item</span>
          </div>
        </div>
        <div>
          {currentCart.map((cartItem, index) => (
            <CartItems
              key={ cartItem.id }
              cartItem={ cartItem }
              setCurrentCart={ setCurrentCart }
              currentCart={ currentCart }
              setCurrentTotalPrice={ setCurrentTotalPrice }
              index={ index }
            />
          ))}
          <span>Total R$:</span>
          <div data-testid="customer_checkout__element-order-total-price">
            {currentTotalPrice.toString().split('.').join(',')}
          </div>
        </div>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <div>
          <select
            name="sellers"
            data-testid="customer_checkout__select-seller"
            value={ currentIdSellerDropDown }
            onChange={ (e) => setCurrentIdSellerDropDown(e.target.value) }
          >
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
          <div style={ { display: 'inline' } }>
            <input
              placeholder="Endereço"
              onChange={ (e) => setCurrentAddress(e.target.value) }
              type="text"
              data-testid="customer_checkout__input-address"
              value={ currentAddress }
            />
            <input
              placeholder="Número"
              onChange={ (e) => setCurrentNumberAddress(e.target.value) }
              type="text"
              data-testid="customer_checkout__input-addressNumber"
              value={ currentNumberAddress }
            />
            <button
              data-testid="customer_checkout__button-submit-order"
              type="submit"
              onClick={ (e) => checkout(e) }
            >
              FINALIZAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
