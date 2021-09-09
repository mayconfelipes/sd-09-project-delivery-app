import React from 'react';
import P from 'prop-types';

import style from './descriptionsContainer.module.scss';

const DescriptionsBar = ({
  isAboutUser = false,
  shouldDeleteApear = true,
  id,
  itemId,
  userOrProductName,
  emailOrQuantity,
  userTypeOrValue,
  deleteOrPrice,
  removeItem,
  dataTestIdId,
  dataTestIdUserOrProductName,
  dataTestIdEmailOrQuantity,
  dataTestIdUserTypeOrValue,
  dataTestIdDeleteOrPrice,
  dataTestIdRemove,
  deleteUser,
}) => {
  let gridStyle = null;

  if (isAboutUser) {
    gridStyle = style.userBar;
  } else if (shouldDeleteApear) {
    gridStyle = style.completeDescriptionsContainer;
  } else {
    gridStyle = style.descriptionsContainer;
  }

  return (
    <div className={ gridStyle }>
      <span className={ style.firstGrid } data-testid={ dataTestIdId }>{ id + 1 }</span>
      <span
        className={ style.secondGrid }
        data-testid={ dataTestIdUserOrProductName }
      >
        { userOrProductName }
      </span>
      <span
        className={ style.thirdGrid }
        data-testid={ dataTestIdEmailOrQuantity }
      >
        { emailOrQuantity }
      </span>
      <span
        className={ style.fourthGrid }
        data-testid={ dataTestIdUserTypeOrValue }
      >
        { userTypeOrValue }
      </span>
      <button
        type="button"
        className={ style.fifthGrid }
        data-testid={ dataTestIdDeleteOrPrice }
        onClick={ deleteUser }
      >
        { deleteOrPrice }
      </button>
      { shouldDeleteApear && (
        <div className={ style.sixthGrid }>
          <button
            type="button"
            onClick={ () => removeItem(itemId) }
            data-testid={ dataTestIdRemove }
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
  isAboutUser: P.string,
  shouldDeleteApear: P.bool.isRequired,
  id: P.number.isRequired,
  itemId: P.number,
  userOrProductName: P.string.isRequired,
  emailOrQuantity: P.number.isRequired,
  userTypeOrValue: P.string.isRequired,
  deleteOrPrice: P.string.isRequired,
  dataTestIdId: P.string.isRequired,
  dataTestIdUserOrProductName: P.string.isRequired,
  dataTestIdEmailOrQuantity: P.string.isRequired,
  dataTestIdUserTypeOrValue: P.string.isRequired,
  dataTestIdDeleteOrPrice: P.string.isRequired,
  removeItem: P.func,
  dataTestIdRemove: P.string,
  deleteUser: P.func,
};

DescriptionsBar.defaultProps = {
  isAboutUser: '',
  itemId: 0,
  removeItem: () => {},
  deleteUser: () => {},
  dataTestIdRemove: '',
};
