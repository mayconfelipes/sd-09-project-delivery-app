import React from 'react';
import styled from 'styled-components';
import useDataSellers from '../../hooks/useDataSellers';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productCardPropTypes } from '../../utils/propTypes';
import { Option, Select } from '../atoms';
import testIds from '../../utils/testIds';

const CheckoutSelect = ({ className, onChange, value }) => {
  const sellers = useDataSellers();

  return (
    <Select
      className={ className }
      name="sellerId"
      value={ value }
      onChange={ onChange }
      data-testid={ testIds.id29 }
    >
      { sellers.map((seller) => (
        <Option value={ seller.id } key={ generateKey() }>
          { seller.name }
        </Option>
      )) }
    </Select>
  );
};

export default styled(CheckoutSelect)``;

CheckoutSelect.propTypes = productCardPropTypes;
