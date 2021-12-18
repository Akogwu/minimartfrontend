import React, {useContext, useRef, useState} from 'react';
import styled from "styled-components";
import {TextField} from "@mui/material";
import {Link,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box, Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import axios from "axios";
import {ApiConfig} from "../../../ApiContext";
import qs from "qs";
import {loginUser} from "../../../redux/UserSlice";


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
  background-color:#0071dc;
  border: none;
  padding: 12px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    background-color:#004f9a;
  }
`

const CreateButton = styled(Link)`
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
  display: block;
  text-decoration: none;
`
const LogoImage= styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`
const Login = () => {

  const navigate = useNavigate();
  const formEl = useRef(null);
  const api = useContext(ApiConfig);
  const loginApi = api.loginApi;
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    emailErr:"",
    passwordErr:""
  });

  const onLogin = (e) => {
    e.preventDefault();
    const form = formEl.current;
    let username = form.username.value;
    let password = form.password.value;
    // if (email.length > 10) {setErrors({...errors,emailErr:"Email is too long"})}
   /* // if (password.length < 5 || password.length > 10) {setErrors({...errors,passwordErr:"Password format not correct"})}*/
    const data = {
      'username': username,
      'password':password
    }
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    axios.post("http://localhost:8080/auth/api/authenticate",qs.stringify(data),{headers}).then(res => {
      console.log(res.data);
      if (res.status === 200 ){
        dispatch(loginUser(res.data))
        navigate("/account")
      }else {
        alert("Erro occur")
      }
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          <Link to="/">
            <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
          </Link>
          <p>Sign in to your MiniMarket account</p>
        </Title>
        <form ref={formEl} onSubmit={onLogin}>
          <Box sx={{
            paddingBottom: 8,
            paddingTop:16
          }}>
            <TextField fullWidth name="username" label="Username" id="username" type="text" className="input"/>
            {errors.emailErr && <span>{errors.emailErr} </span>}
          </Box>

          <Box sx={{ paddingBottom: 15 }}>
            <TextField type="password" fullWidth label="Password" name="password" id="password" className="input" />
            {errors.passwordErr && <span>{errors.passwordErr}</span>}
          </Box>

          <Link to="/">Forgot password?</Link>
          <FormGroup style={{ paddingBottom: '14px'}}>
            <FormControlLabel  control={
              <Checkbox defaultChecked color="default" />
            } label="Keep me signed in" />
          </FormGroup>

          <Button type="submit">
            Sign in
          </Button>

          <p style={{ padding: '16px 0'}}>Don't have an account?</p>

          <CreateButton to="/signup">
            Create Account
          </CreateButton>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;