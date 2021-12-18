import React from 'react';
import styled from "styled-components";
import {categories} from "../store/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h2`
  font-size: 1.5rem;
  padding: 5px;
`
const Categories = () => {
  return (
    <section>
      <Title>
        For you
      </Title>
      <Container>
        {categories.map(item => <CategoryItem key={item.id} item={item}/>)}
      </Container>
    </section>

  );
};

export default Categories;