import React, {Fragment} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Navbar from "../../components/Header/Navbar";
import {Typography} from "@material-ui/core";
import {Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import styled from "styled-components";
import {RateReviewOutlined} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {
  DirectionsCarFilledOutlined,
  PersonOutlined,
  ReceiptLongOutlined,
  ShoppingCartCheckoutOutlined
} from "@mui/icons-material";

const useStyle = makeStyles({
  sideBar:{
    border:0,
    borderRight:  '1px solid #ddd',
    height:'100vh',
  },
  container:{
  }
});

const Wrapper = styled.div`
  padding-top: 50px;
  
  & .welcome{
    padding-bottom: 9px;
    padding-left: 1rem;
    border-bottom: 0.54px solid #ddd;
    & .clientName{
      padding-bottom: 8px;
    },
  & span{
    font-size: 0.76rem;
  }
  }
  
  & .sideList{
    list-style: none;
    padding:1rem 1.4rem ;
    border-bottom: 0.54px solid #ddd;
    & li{
      padding: 0.54rem 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      
    }
    & a{
      text-decoration: none;
      color: #000000;
      font-weight: 300;
      font-size: 0.865rem;
      transition: all 0.5s ease;
      &:hover{
        color: rgb(0, 79, 154);
        text-decoration: underline;
      }
    }
    
  }
  .title{
    padding-top: 1rem;
    padding-left: 1rem;
  }
`


const Account = () => {
  const classes = useStyle();
  const user = useSelector(state => state.user.user)
  localStorage.setItem("user",user);
  let u = localStorage.getItem("user")
  console.log(user)
  return (
    <Fragment>
      <Navbar/>
      <Container maxWidth="xl" className={classes.container}>
        <Breadcrumbs aria-label="breadcrumb" style={{ paddingBottom: '5px',paddingTop:'10px'}}>
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Typography color="text.primary"> My account</Typography>
        </Breadcrumbs>

        <Wrapper>
          <Grid container spacing={2}>
            <Grid item xs={2} className={classes.sideBar} >
              <div className="welcome">
                <h2 className="clientName">Hi, {u.name}</h2>
                <span>Thanks for bein a Minimarket customer</span>
              </div>

              <ul className="sideList">
                <li><ReceiptLongOutlined fontSize="small"  color="disabled"/><Link to="/order"> Purchase history</Link></li>
                <li> <ShoppingCartCheckoutOutlined fontSize="small"  color="disabled"/> <Link to="/order">Orders</Link></li>
                <li> <RateReviewOutlined fontSize="small"  color="disabled"/> <Link to="/order">Pending Reviews</Link></li>
              </ul>

              <h4 className="title">Manage Account</h4>
              <ul className="sideList">
                <li><PersonOutlined fontSize="small"  color="disabled"/><Link to="/order"> Person info</Link></li>
                <li> <DirectionsCarFilledOutlined fontSize="small"  color="disabled"/> <Link to="/order">Address</Link></li>
              </ul>

            </Grid>

            <Grid item xs={6}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consequuntur eius, fuga molestias obcaecati reiciendis saepe. Ad aliquam autem deleniti, eaque ipsa laudantium minus nobis pariatur, quas velit vero.
            </Grid>
          </Grid>
        </Wrapper>

      </Container>



    </Fragment>
  );
};

export default Account;