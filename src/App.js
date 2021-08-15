import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
// components
import { Navbar, Products, Cart, Checkout } from "./components/index";

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
  const handleAddToCart = async (productId, quantity = 1) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };
  const handleUpdateCartQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
