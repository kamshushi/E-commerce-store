import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
// components
import { Navbar, Products } from "./components/index";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(products);
  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
