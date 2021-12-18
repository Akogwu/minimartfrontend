import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Box, Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const Wrapper = styled.div`
  
  & form {
    & .input{
      
    }
    
  }
`

const Title = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`

const Button = styled.button`
  background-color: #d7a428;
  border: none;
  padding: 12px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  transition: all 0.5s ease;

  &:hover {
    background-color: #c49b1b;
    cursor: pointer;
  }
`

const SignInButton = styled(Link)`
  font-size: 1rem;
  padding: 12px;
  border: none;
  color: rgb(35, 47, 50);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(35 47 50) 0px 0px 0px 1px inset;
  border-radius: 62.5rem;
  font-weight: 700;
  margin-top: 16px;
  width: 100%;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointer;
`
const LogoImage= styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`
const SellerRegistration = () => {


  const FormEl = useRef(null);
  const navigate = useNavigate();
  const [detail,setDetail] = useState({
    name:"",
    username:"",
    password:"",
    email:"",
    phone:"",
    active:true,
    role:""
  });


  const register = (e) => {
    e.preventDefault();
    const formData = FormEl.current;
    const data = {
      name: formData.sname.value,
      username: formData.username.value,
      password: formData.password.value,
      email: formData.email.value,
      phone: formData.phone.value,
      active: true,
      roles:[{
        name:"ROLE_SELLER"
      }]
    }
    console.log(data);
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
    axios.post("http://localhost:8080/auth/api/register/seller",data,{headers})
      .then(res => {
        console.log(res.data)
        if (res.status === 200){
          navigate("/seller/login")
        }else {
          alert("Error occur")
        }
        console.log(res)
      }).catch(err => {
      console.log(err.message)
    })
    console.log(detail);
  }


  return (
    <Container>
      <Wrapper>
        <Title>
          <Link to="/">
            <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
          </Link>
          <p>Create your MiniMarket seller account</p>
        </Title>
        <form onSubmit={register} ref={FormEl}>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField fullWidth type="text" label="Name"  name="sname" id="sname"  className="input"/>
          </Box>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField fullWidth type="text" label="Username" name="username" id="username"  className="input"/>
          </Box>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField type="email" fullWidth label="Email address" id="email" name="email" className="input"/>
          </Box>

          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField type="text" fullWidth label="Phone" id="phone" name="phone" className="input"/>
          </Box>

          <Box sx={{ paddingBottom: 15 }}>
            <TextField type="password" fullWidth label="Password" name="password" id="password" className="input" />
          </Box>

          <Box sx={{ paddingBottom: 15 }}>
            <TextField type="text" fullWidth label="Business name" name="businessName" id="businessName" className="input" />
          </Box>

          <FormGroup style={{ paddingBottom: '14px'}}>
            <FormControlLabel  control={
              <Checkbox defaultChecked  color="default"/>
            } label="Keep me signed in" />
          </FormGroup>

          <Button type="submit">
            Create account
          </Button>

          <p style={{ padding: '16px 0'}}>Already have an account?</p>

          <SignInButton to="/seller/login">
            Sign in
          </SignInButton>
        </form>
      </Wrapper>
    </Container>
  );
};

export default SellerRegistration;