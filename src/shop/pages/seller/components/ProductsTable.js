import React from 'react';
import {Container} from "@mui/material";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";

const columns = [
  {title:"ID", field:"id"},
  {title:"Title", field:"title"},
  {title:"Price", field:"price"},
  {title:"Image", field:"img",
    render:(rowData) => <img src={rowData.img} style={{ width:40, borderRaduis:"50%" }} alt="product"/>
  }
]

const ProductsTable = ({products}) => {
  const data = [];
  products.map( product => data.push(product));
  return (
    <Container>
      <MaterialTable icons={tableIcons} title="Products" columns={columns} data={data}
      actions={[
        {
          icon:tableIcons.Delete,
          tooltip:"Delete Product",
          onClick: (event, rowData) => alert("Deleted")
        },{
          icon:tableIcons.Edit,
          tooltip:"Edit Product",
          onClick: (event, rowData) => alert("Editing")
        }
      ]}
      options={{sorting:true}}
      />
    </Container>
  );
};

export default ProductsTable;