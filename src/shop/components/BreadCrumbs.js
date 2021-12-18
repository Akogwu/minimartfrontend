import React from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const BreadCrumbs = ({links,current}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ paddingBottom: '5px',paddingTop:'10px'}}>
      <Link underline="hover" color="inherit" to="/">
        Home
      </Link>
      <Typography color="text.primary"> My account</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;