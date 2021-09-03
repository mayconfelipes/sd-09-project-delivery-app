/* import PropTypes from 'prop-types';
import React from 'react';

function DeliveryDetails({ sellers, salesDetails }) {
  const [salesDetails, setSalesDetails] = useState({
    userId: id,
    sellerId: 2,
    totalPrice: totalPriceStorage,
    deliveryAdress: '',
    deliveryNumber: 0,
    status: 'pendente',
  });

  return (
    <table>
      <thead>
        <tr>
          <th>P. Vendedora Responsável</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select
              data-testid="customer_checkout__select-seller"
              onClick={
                ({ target }) => setSalesDetails({
                  ...salesDetails, sellerId: target.value,
                })
              }
            >
              {sellers.map((seller) => (
                <option key={ seller.id } value={ seller.id }>
                  {seller.name}
                </option>))}
            </select>
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({
                  ...salesDetails, deliveryAdress: target.value,
                })
              }
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({
                  ...salesDetails, deliveryNumber: target.value,
                })
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

DeliveryDetails.propTypes = {
  salesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      sellerId: PropTypes.string,
      totalPrice: PropTypes.number,
      deliveryAdress: PropTypes.string,
      deliveryNumber: PropTypes.string,
      satatus: PropTypes.string,
    }),
  ).isRequired,
  sellers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.number,
      password: PropTypes.string,
      role: PropTypes.string,
    }),
  ).isRequired,
};

export default DeliveryDetails;
 */
