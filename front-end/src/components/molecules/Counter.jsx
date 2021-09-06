import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import testIds from '../../utils/testIds';
import { Button, Input, Wrapper } from '../atoms';

const Counter = ({ className }) => {
  const [quantity, setQuantity] = useState(() => 0)

  const decrease = useCallback(
    () => {
      setQuantity((current) => (current === 0 ? 0 : current - 1))
    },
    [],
  );

  return (
    <Wrapper className={ className }>
      <Wrapper>
        <Button primary onClick={  }>-</Button>
        <Input type="text" value={ quantity } />
        <Button primary>+</Button>
      </Wrapper>
    </Wrapper>
  );
};

export default styled(Counter)`
  display: flex;
  border-radius: 5px;
`;

Counter.propTypes = {
  className: PropTypes.string.isRequired,
};
