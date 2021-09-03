import React from 'react';
import SellerSelect from './SellerSelect';
import InputAddress from './InputAddress';
import InputAddressNumber from './InputAddressNumber';

function OrderAddress() {
  return (
    <div>
      <SellerSelect />
      <InputAddress />
      <InputAddressNumber />
    </div>
  );
}

export default OrderAddress;
