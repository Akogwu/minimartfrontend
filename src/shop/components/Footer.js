import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components";
import {Copyright} from "@material-ui/icons";

const Container = styled.div`
  background-color: #004f9a;
  padding: 2rem;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #f1f1f1;
`
const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  text-align: center;
  width: 100px;
`
const Sellers = styled.div`
  
`
const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
`

const Button = styled(Link)`
  background-color:#0071dc;
  border: none;
  padding: 12px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  transition: all 0.5s ease;
  margin-right: 8px;
  text-decoration: none;
  text-align: center;
  &:hover{
    background-color:#004f9a;
  }
`
const Footer = () => {
  return (
    <Container>
      <CopyrightContainer>
        <Copyright/> <span>All Right Reserved, Minimarket 2021</span>
      </CopyrightContainer>

      <LogoImg src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>

      <Sellers>
        <h3>Make money with us</h3>
        <p>Register or Login to start selling on Minimarket today</p>
        <Buttons>
          <Button to="/seller/signup">
            Sign up
          </Button>
          <Button  to="/seller/login">
            Sign in
          </Button>
        </Buttons>
      </Sellers>
    </Container>
  );
};

export default Footer;