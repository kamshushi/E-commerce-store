import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
// components
import Product from "./Product/Product";
// styles
import useStyles from "./styles";

const Products = ({ products, onAddToCart, clearErrors }) => {
  const classes = useStyles();
  useEffect(() => {
    clearErrors();
  }, []);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products &&
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Products;
