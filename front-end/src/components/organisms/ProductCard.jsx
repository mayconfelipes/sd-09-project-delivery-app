import React from 'react';
import styled from 'styled-components';
import { Image, Label, Wrapper } from '../atoms';
import ProductCounter from '../molecules/ProductCounter';
import ProductName from '../molecules/ProductName';
import testIds from '../../utils/testIds';
import { productCardPropTypes } from '../../utils/propTypes';

const NameCounterWrapper = styled(Wrapper)``;

const ImagePriceWrapper = styled(Wrapper)``;

const Price = styled(Label)``;

const ProductCard = ({ className, product }) => {
  const { id, name, price, urlImage } = product;
  const displayedPrice = price.replace('.', ',');

  return (
    <Wrapper className={ className }>
      <ImagePriceWrapper>
        <Image src={ urlImage } alt={ name } data-testid={ testIds.id17(id) } />
        <Price>
          {'R$ '}
          <span data-testid={ testIds.id16(id) }>
            { displayedPrice }
          </span>
        </Price>
      </ImagePriceWrapper>
      <NameCounterWrapper>
        <ProductName name={ name } testid={ testIds.id15(id) } />
        <ProductCounter product={ { id, name, price } } />
      </NameCounterWrapper>
    </Wrapper>
  );
};

export default styled(ProductCard)`
  background-color: #eaf1ef;
  position: relative;
  padding: 2px 2px 16px 2px;
  box-shadow: 0 5px 5px #00000040;
  
  ${Image} {
    /* width: 100%; */
    height: auto;
    max-height: 268.35px;
  }

  ${ImagePriceWrapper} {
    display: grid;
    background-color: white;
    justify-content: center;
    position: relative;
    width: 100%;
    margin: 0 0 8px 0;
  }

  ${Price} {
    background: #F2FFFCBF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    justify-self: start;
    top: 0;
    width: 35%;
    position: absolute;
    padding: 5px 15px;
    margin: 5px;
  }

  ${ProductName} {
    text-align: center;
    font-weight: 400;
    font-size: .9rem;
    margin: 0 0 .3rem 0;
  }

  ${ProductCounter} {
    display: flex;
    justify-content: center;
  }
`;

ProductCard.propTypes = productCardPropTypes;
