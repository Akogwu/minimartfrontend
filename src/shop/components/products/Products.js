import React, {useState,useEffect,useContext} from 'react';
import styled from "styled-components";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {addItemToCart} from "../../../redux/CartSlice";
import {ApiConfig} from "../../../ApiContext";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-between;
  
`

const Title = styled.h2`
  font-size: 1.5rem;
  padding: 5px;
  margin-top: 1.6rem;
`


const Products = () => {
  const [open,setOpen] = useState(false);
  const [singleProduct,setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[] );
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cartItems)
  const api = useContext(ApiConfig);
  const  productApi = api.productApi;


  const addProductToCart = (product) => {
    dispatch(addItemToCart(product))
    // let productExistInCart = false;
    // const cartItemsCopy = cartItems.slice();
    // cartItemsCopy.forEach( cartItem => {
    //   if (cartItem.id === product.id){
    //     cartItem.quantity++;
    //     productExistInCart = true;
    //   }
    // });
    // if(!productExistInCart){
    //   cartItems.push({...product,quantity:1})
    // }
    // setCartItems(cartItems)
    localStorage.setItem("cartItems",JSON.stringify(cartItems));

  }

  const removeFromCart = (product) => {
    const cartItemsCopy = cartItems.slice();
    setCartItems(cartItemsCopy.filter(item => item.id !== product.id));
  }

  const loadProduct = (product) => {
    setOpen(true);
    setSingleProduct(product);
  }



  useEffect(()=>{
    axios.get(productApi).then(res =>{
      setProducts(res.data)
      dispatch(res.data);
    })
    console.log(products)
  },[])

  return (
    <section>
      <Title>Fearued Products</Title>
      <Container>
        {products.map(item => <Product key={item.id} item={item} loadProduct={loadProduct} addProductToCart={addProductToCart} />)}
      </Container>
      <SingleProduct product={singleProduct} open={open} setOpen={setOpen}/>
    </section>

  );
};

export default Products;