import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 4px 0;
`

const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Image = styled.img`
  width: 90px;
  padding-right: 10px;
`

const Desc = styled.div`

`

const Price = styled.p`
  font-weight: 700;
`

const CartAction = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
const Link = styled.button`
  flex: 1;
  text-decoration: underline;
  font-size: 80%;
  cursor: pointer;
  background: transparent;
  border: none;
  &:hover{
    text-decoration: none;
  }
`

const QuantityStepper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border:0.5px solid #e1e1e1 ;
  border-radius: 62.5rem;
  padding: 9px;
`

const Quantity = styled.span`

`

const Button = styled.button`
  transition: all 0.5s ease;
  padding: 4px;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover{
    background-color: #f1f1f1;
  }
  
`


const CartItem = ({item,removeFromCart}) => {
  return (
    <Container>

      <CartDetails>
        <Image src={item.image}/>
        <Desc>
          {item.title}
        </Desc>
        <Price>
          ${item.price}
        </Price>
      </CartDetails>

      <CartAction>
        <Link onClick={() => removeFromCart(item)}>Remove</Link>
        <Link>Qty: {item.quantity}</Link>
        {/*<QuantityStepper>*/}
        {/*    <Button>-</Button>*/}
        {/*    <Quantity>1</Quantity>*/}
        {/*    <Button>+</Button>*/}
        {/*</QuantityStepper>*/}
      </CartAction>
    </Container>
  );
};

export default CartItem;