import React from 'react';
import P from 'prop-types';
import style from './gridOrderDetails.module.scss';

const GridOrderDetails = ({ shouldRemoveItemApear = false }) => {
  const gridStyle = shouldRemoveItemApear
    ? style.gridWithRemoveItem : style.gridWithoutRemoveItem;

  return (
    <div className={ gridStyle }>
      <span className={ style.firstGrid }>Item</span>
      <span className={ style.secondGrid }>Descrição</span>
      <span className={ style.thirdGrid }>Quantidade</span>
      <span className={ style.fourthGrid }>Valor Unitário</span>
      <span className={ style.fifthGrid }>Sub-total</span>
      {shouldRemoveItemApear && <span className={ style.sixthGrid }>Remover Item</span>}

    </div>
  );
};

export default GridOrderDetails;

GridOrderDetails.propTypes = {
  shouldRemoveItemApear: P.bool,
};

GridOrderDetails.defaultProps = {
  shouldRemoveItemApear: false,
};
