import React, {useEffect, useContext, useState, useRef} from 'react';
import {Box, Container, FormControl, MenuItem, Select} from "@material-ui/core";
import {TextField} from "@mui/material";
import axios from "axios";
import {ApiConfig} from "../../../ApiContext";
import {useNavigate} from "react-router-dom";


const AddProduct = () => {
  const api = useContext(ApiConfig)
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const formEl = useRef(null);
  const  user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    axios.get("http://localhost:8080/categories").then(res => {
      console.log(res.data);
      setCategories(res.data);
    }).catch(err => {

    })
  },[])

  const addProduct = (e) => {
    e.preventDefault();
    const formData = formEl.current;
    const data = {
      title: formData.sname.value,
      description: formData.username.value,
      category: {
        id: formData.category.value,
      },
      price: formData.price.value,
      img: formData.phone.value,
      active: true,
      seller:{
        id:user.id
      }
    }

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }

    axios.post("http://localhost:8080/products",data).then(res => {

    }).catch(err => {

    });

  }




    return (
    <div>
      <Container>
          <form ref={formEl}>
            <Box sx={{
              paddingBottom: 8,
              paddingTop:16
            }}>
              <Box sx={{ paddingBottom: 15 }}>
                <TextField type="text" fullWidth label="Product title"  name="title" id="title" className="input" />
              </Box>
              <Box sx={{ paddingBottom: 15 }}>
                <TextField type="text" multiline={4} fullWidth label="Description"  name="description" id="description" className="input" />
              </Box>
              <Box sx={{ paddingBottom: 15 }}>
                <TextField type="text" fullWidth label="Price"  name="price" id="price" className="input" />
              </Box>

              <FormControl fullWidth>
                <Select
                  labelId="category"
                  id="category"
                  label="Category"
                  name="category"
                  fullWidth
                  className="input"
                >
                  <MenuItem value="Select category">
                    <em>Select category</em>
                  </MenuItem>
                  {
                    categories.map(category =>  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
                  }

                </Select>
              </FormControl>

            </Box>
          </form>
      </Container>
    </div>
  );
};

export default AddProduct;