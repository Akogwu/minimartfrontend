import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  -webkit-box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  flex: 1;
  border-radius: 0.5rem;
  margin: 5px;
`
const Image = styled.img`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`
const Info = styled.div`
  padding: 1rem;
`
const Title = styled.h2`
  font-size: 1rem;
`
const Desc = styled.p`
  padding: 10px 0;
  font-size: 0.86rem;
`
const Button = styled.button`
  font-size: .875rem;
  height: 2rem;
  padding: 0 1rem;
  border: none;
  color: rgb(35, 47, 50);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(35 47 50) 0px 0px 0px 1px inset;
  border-radius: 62.5rem;
  font-weight: 700;
  margin-top: 16px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>
          {item.title}
        </Title>
        <Desc>
          {item.desc}
        </Desc>
        <Button>
          Shop now
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;