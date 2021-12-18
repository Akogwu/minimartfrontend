import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/user/Login";
import Registration from "./pages/user/Registration";
import Account from "./pages/user/Account";
import SellerLogin from "./pages/seller/SellerLogin";
import SellerRegistration from "./pages/seller/SellerRegistration";
import Dashboard from "./pages/seller/Dashboard";
import AddProduct from "./pages/seller/AddProduct";


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Registration/>}/>
        <Route path="account" element={<Account/>} />


        <Route path="seller">
          <Route path="login" element={<SellerLogin/>}/>
          <Route path="signup" element={<SellerRegistration/>}/>
            <Route path="dashboard" element={<Dashboard/>}>
              <Route path="addProduct" element={<AddProduct/>}/>
            </Route>
        </Route>


      </Routes>
    </div>
  );
};

export default Routers;