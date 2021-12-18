import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FFC220;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  padding: 0.54rem 0;
`

const Announcement = () => {
  return (
    <Container>
      Grab these deals while you can Shop now
    </Container>
  );
};

export default Announcement;