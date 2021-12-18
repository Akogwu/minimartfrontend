import React from 'react';
import {Drawer} from "@mui/material";
import {Box, Container, Grid} from "@material-ui/core";
import styled from "styled-components";
import {AddOutlined} from "@mui/icons-material";

const ImageGallery = styled.img`
  width: 250px;
`

const ProductDetails = styled.div`
  -webkit-box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  height: 100%;
  padding: 10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Buttons = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color:#0071dc;
  border: none;
  padding: 10px;
  border-radius: 62.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color:#004f9a;
  }
`

const BuyButton = styled.button`
  font-size: 1rem;
  padding: 10px;
  border: none;
  color: rgb(35, 47, 50);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(35 47 50) 0px 0px 0px 1px inset;
  border-radius: 62.5rem;
  font-weight: 600;
  margin-right: 0.54rem;
`

const CloseBar = styled.div`
  cursor: pointer;
  width: 30px;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  & span{
    transform: rotate(90deg);
  }
`

const SingleProduct = ({product,open,setOpen}) => {
  return (
    <div style={{position:"relative"}}>
      <Drawer
        anchor="bottom"
        open={open} onClose={() => setOpen(false)}>
        <Container>
          <Box sx={{
            padding:15,
            height:'60vh'
          }}>
            <Grid container spacing={4} >
              <Grid item xs={12} md={8} container>
                <Grid md={6}>
                  <h3>Related Products</h3>
                </Grid>
                <Grid md={6}>
                  <ImageGallery src={product.image}/>
                </Grid>

              </Grid>
              <Grid item xs={12} md={4}>
                <ProductDetails>
                  <h3 className="title">{product.title}</h3>
                  <h2>${product.price}</h2>
                  <Buttons>
                    <BuyButton>Buy now</BuyButton>
                    <Button><AddOutlined/> <span>Add to cart</span></Button>
                  </Buttons>
                </ProductDetails>
              </Grid>
            </Grid>
          </Box>

        </Container>
        <CloseBar onClick={ ()=> setOpen(false)}>
          <span>Close</span>
        </CloseBar>
      </Drawer>
    </div>
  );
};

export default SingleProduct;