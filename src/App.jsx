import { Link, Outlet } from "react-router-dom";
import "@/styles/App.css"
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext({
  products: [],
  set_products: null,
  cart_total: [],
  set_cart_total: null,
})

function App() {
  const [products, set_products] = useState(null);
  const [cart_total, set_cart_total] = useState(0);

  return (
    <>
      <ShopContext.Provider value={{products, set_products, cart_total, set_cart_total}}>
        <nav className="nav">
          <Link to="home">Home</Link>
          <Link to="shopping">Shop</Link>
        </nav>
        <Outlet />
      </ShopContext.Provider>
    </>
  )
}

export default App
