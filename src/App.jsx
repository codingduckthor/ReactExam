import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import "./App.module.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="pageContainer">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Main addToCart={addToCart} removeFromCart={removeFromCart} />
      {isCartOpen && <Cart cart={cart} onClose={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default App;
