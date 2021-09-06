import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { Label, Link, Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import testIds from '../../utils/testIds';

const UserGroup = ({ className }) => {
  const { user: { data: { name } } } = useContext(AppContext);

  return (
    <Wrapper className={ className }>
      <Label data-testid={ testIds.id13 }>
        { name }
      </Label>
      <Link to="/" data-testid={ testIds.id14 }>
        Sair
      </Link>
    </Wrapper>
  );
};

export default styled(UserGroup)`
  color: ${getThemeColor('light')};
  display: grid;
  grid-template-columns: auto 30%;

  ${Label} {
    background-color: ${getThemeColor('tertiary')};
    font-weight: 400;
    display: inline-grid;
    place-items: center;
    padding: 0 auto;
    text-align: center;
  }

  ${Link} {
    display: inline-grid;
    place-items: center;
    color: ${getThemeColor('light')};
    background-color: ${getThemeColor('quaternary')};
  }
`;

UserGroup.propTypes = {
  className: PropTypes.string.isRequired,
};
