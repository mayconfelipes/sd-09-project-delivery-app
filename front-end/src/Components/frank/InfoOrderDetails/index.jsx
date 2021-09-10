import React from 'react';

const InfoOrderDetails = ({
  SellerApear = true,
  StatusApear = true,
  
}) => (
  <div className={  }>
    <p className={  }>
      PEDIDO
      <span data-testid={  }>0003</span>
      ;
    </p>
    {SellerApear
    && (
      <p>
        P. Vend:
        <span data-testid={ }>Fulana 1</span>
      </p>
    )}
    <p data-testid={  } className={ }>21/08/2021</p>
    <p data-testid={  } className={  }>Entregue</p>
    {StatusApear && <p className={ }>PREPARAR PEDIDO</p>}
    <p
      data-testid={  }
      className={  }
    >
      MARCAR COMO ENTREGUE
    </p>
  </div>
);

export default InfoOrderDetails;

