import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Header/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/Categories";
import {Container} from "@material-ui/core";
import Products from "../../components/products/Products";
import Footer from "../../components/Footer";
import axios from "axios";
import {ApiConfig} from "../../../ApiContext";

const Home = (props) => {
  const base = 'http://localhost:8080';
 return(
    <div>
       <Navbar />
      <Container>
        <Slider/>
        <Categories/>
        <ApiConfig.Provider value={{
          productApi: base + '/products',
          userApi: base + '/users',
          buyersApi: base + '/buyers',
          sellerApi: base + '/sellers',
          registerApi: base + '/sellers',
          loginApi: base + '/authenticate',
        }}>
          <Products/>
        </ApiConfig.Provider>s
      </Container>
      <Footer/>
    </div>

)};

export default Home;