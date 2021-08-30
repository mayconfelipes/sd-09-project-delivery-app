import React from 'react';
import P from 'prop-types';

import style from './descriptionsContainer.module.scss';

const DescriptionsBar = ({
  index,
  isAboutUser = false,
  shouldDeleteApear = true,
  id,
  userOrProductName,
  emailOrQuantity,
  userTypeOrValue,
  deleteOrPrice,
  dataTestIdId,
  dataTestIdUserOrProductName,
  dataTestIdEmailOrQuantity,
  dataTestIdUserTypeOrValue,
  dataTestIdDeleteOrPrice,
}) => {
  let gridStyle = null;
  // const gridStyle = isAboutUser
  //   ? style.userBar
  //   : shouldDeleteApear
  //     ? style.completeDescriptionsContainer
  //     : style.descriptionsContainer;

  if (isAboutUser) {
    gridStyle = style.userBar;
  } else if (shouldDeleteApear) {
    gridStyle = style.completeDescriptionsContainer;
  } else {
    gridStyle = style.descriptionsContainer;
  }

  return (
    <div className={ gridStyle }>
      <div className={ style.firstGrid }>
        <p data-testid={ dataTestIdId }>{ id }</p>
      </div>
      <div className={ style.secondGrid }>
        <p data-testid={ dataTestIdUserOrProductName }>{ userOrProductName }</p>
      </div>
      <div className={ style.thirdGrid }>
        <p data-testid={ dataTestIdEmailOrQuantity }>{ emailOrQuantity }</p>
      </div>
      <div className={ style.fourthGrid }>
        <p data-testid={ dataTestIdUserTypeOrValue }>{ userTypeOrValue }</p>
      </div>
      <div className={ style.fifthGrid }>
        <p data-testid={ dataTestIdDeleteOrPrice }>{ deleteOrPrice }</p>
      </div>
      { shouldDeleteApear && (
        <div className={ style.sixthGrid }>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            Remover
          </button>
        </div>
      ) }
    </div>
  );
};

export default DescriptionsBar;

DescriptionsBar.propTypes = {
  index: P.string.isRequired,
  isAboutUser: P.bool.isRequired,
  shouldDeleteApear: P.bool.isRequired,
  id: P.string.isRequired,
  userOrProductName: P.string.isRequired,
  emailOrQuantity: P.string.isRequired,
  userTypeOrValue: P.string.isRequired,
  deleteOrPrice: P.string.isRequired,
  dataTestIdId: P.string.isRequired,
  dataTestIdUserOrProductName: P.string.isRequired,
  dataTestIdEmailOrQuantity: P.string.isRequired,
  dataTestIdUserTypeOrValue: P.string.isRequired,
  dataTestIdDeleteOrPrice: P.string.isRequired,
};
