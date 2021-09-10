import React from 'react';

const GridDetails = ({ shouldRemoveItemApear = false }) => {
  
  return (
    <div className={estilo}>
      <span className={ }>Item</span>
      <span className={ }>Descrição</span>
      <span className={ }>Quantidade</span>
      <span className={ }>Valor Unitário</span>
      <span className={ }>Sub-total</span>
      {shouldRemoveItemApear && <span className={estilo }>Remover Item</span>}

    </div>
  );
};

export default GridDetails;


