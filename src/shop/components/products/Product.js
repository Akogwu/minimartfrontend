import React from 'react';
import styled from "styled-components";
import {AddOutlined} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 240px;
  
  & a{
   text-decoration: none;
    color: rgba(0,0,0,0.56) ;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  background-color: #0071dc;
  padding: 0 1.5rem;
  font-size: 1rem;
  height: 2.5rem;
  border-radius: 62.5rem;
  transition: all 0.5s ease;
  &:hover{
    background-color: #004f9a;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 300px;
  
  
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.3rem;
`

const Title = styled.p`
  padding: 0.7rem 0;
`
const Price = styled.p`
  font-weight: 700;
`
const Product = ({item,loadProduct,addProductToCart}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>
          <Image src={item.image} onClick={() => loadProduct(item)}/>
        <ButtonContainer>
          <Button onClick={() => addProductToCart(item)}>
            <AddOutlined/> Add to cart
          </Button>
        </ButtonContainer>
      </Header>
      <Link to="/">
        <Body>
          <Price>
            ${item.price}
          </Price>
          <Title>
            {item.title}
          </Title>
        </Body>
      </Link>

    </Container>
  );
};

export default Product;