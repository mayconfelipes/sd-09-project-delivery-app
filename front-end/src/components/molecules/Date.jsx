import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';
import convertDate from '../../utils/convertDate';

const Date = ({ className, date, testid }) => {
  const displayedDate = convertDate(date);

  return (
    <Label className={ className } data-testid={ testid }>
      { displayedDate }
    </Label>
  );
};

export default styled(Date)`
  color: ${getThemeColor('dark')};
`;

Date.propTypes = productNamePropTypes;
