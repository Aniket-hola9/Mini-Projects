import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  // Add/remove 'dark' class on <body>
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>🛍 Product Store</h1>
          <button onClick={() => setDark(!dark)} className="theme-toggle">
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>
        <div className="container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
