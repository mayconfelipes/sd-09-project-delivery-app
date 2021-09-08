import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Loader = () => (
  <Container>
    <ClipLoader />
  </Container>
);

export default Loader;
