import React, {Fragment, useState} from 'react';
import styled from "styled-components";
import {
  LocalConvenienceStoreOutlined,
  LocationOnOutlined,
  Search,
  ShoppingCartOutlined,
  PersonOutline,
} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import CartDrawer from "../cart/CartDrawer";
import {GridViewOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Announcement from "./Announcement";
import {useSelector} from "react-redux";

const Container = styled.div`
  background-color: #0071dc;
`
const Wrapper = styled.div`
  height: 90px;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  
`
const Logo = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  color: #fff;
`
const LogoImage= styled.img`
  width: 30px;
  height: 30px;
  margin-left: 4px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  width: 100%;
  position: relative;
`

const Input = styled.input`
  flex: 1;
  padding: 11px;
  border: 0.5px solid lightgray;
  border-radius: 20px;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  border-radius: 62.2rem;
  padding: 6px 12px;
  color: #fff;
  &:hover{
    background-color: #004f9a;
  }
  &.store{
    margin-left: 40%;
  }
`

const StoreMenu = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 5px;
`

const AccountMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
  position: relative;
`

const Location = styled.div`
  background-color: #004f9a ;
  color: #fff;
  display: flex;
  align-items: center;
`
const Links = styled (Link)`
  font-size: 0.9rem;
  text-decoration: underline;
  color: #fff;
  padding: 9px;
  display: flex;
 align-items: center;
`

const Cart = styled.div`
  display: flex;
  flex-direction: column;
`

const DropMenu = styled.div`
  position: absolute;
  background-color: #fff;
  height: 200px;
  bottom: -220px;
  z-index: 100;
  padding: 1rem;
  width: 200px;
  -webkit-box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 15%);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  text-decoration: none;
  text-align: center;
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
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  display: block;
  text-decoration: none;
`

const Navbar = ({cartItems, removeFromCart}) => {
  const [open,setOpen] = useState(false);
  const [openWidget, setOpenWidget] = useState(false);
  const  items = useSelector(state => state.cart.cartItems)

  return (
    <Fragment>
      <CartDrawer open={open} setOpen={setOpen} cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Announcement/>
      <Container>
        <Wrapper >
          <Left>
            <Logo>
              MiniMarket
              <LogoImage src="https://i.ibb.co/6J520cJ/miu-logo-removebg-preview.png"/>
            </Logo>
            <MenuItem className="store">
              <GridViewOutlined/>
              <StoreMenu>
                Stores
              </StoreMenu>
            </MenuItem>
          </Left>
          <Center>
            <SearchContainer>
              <Input placeholder="Search everything at MiniMarket online"/>
              <Search style={{
                backgroundColor: '#ffc220',
                padding:`4px`,
                borderRadius:`50%`,
                position:`absolute`,
                right:`6`
              }}/>
            </SearchContainer>
          </Center>
          <Right>
            <MenuItem onMouseOver={setOpenWidget}>
              <PersonOutline/>
              <AccountMenu to="/login" >
                Sign in<br/>
                <strong>
                  Account
                </strong>

              </AccountMenu>
            </MenuItem>
            <MenuItem>
              <Cart onClick={setOpen}>
                <Badge badgeContent={items.length} >
                  <ShoppingCartOutlined/>
                </Badge>
                <small style={{ fontSize:'9px' }}>$0.00</small>
              </Cart>
            </MenuItem>
            {openWidget && <DropMenu onMouseOut={() => setOpenWidget(false)}>
              <Button to="/login">Sign in</Button>
              <CreateButton to="/signup">
                Create an account
              </CreateButton>
            </DropMenu>}
          </Right>
        </Wrapper>
        <Location>
          <Links to="/">
            <LocalConvenienceStoreOutlined style={{ marginRight:'3px' }}/> Fairfield supercenter
          </Links> |
          <Links to="/">
            <LocationOnOutlined/> Fairfield, 52557
          </Links>
        </Location>
      </Container>
    </Fragment>

  );
};

export default Navbar;